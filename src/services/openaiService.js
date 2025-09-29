// Real AI service using OpenAI API for dynamic question generation
// This service integrates with OpenAI to generate quiz questions and feedback

import { OPENAI_API_KEY, API_CONFIG, isAPIConfigured } from '../config/api';

// Generate quiz questions using OpenAI
export const generateQuizQuestionsWithAI = async (topic, quizLength = 5) => {
  // Fallback to mock data if API key is not configured
  if (!isAPIConfigured()) {
    console.warn('OpenAI API key not configured. Using mock data.');
    return generateMockQuizQuestions(topic, quizLength);
  }

  try {
    const prompt = `Generate ${quizLength} multiple choice quiz questions about "${topic}". 
    Return the response as a JSON object with this exact structure:
    {
      "success": true,
      "topic": "${topic}",
      "description": "Brief description of the topic",
      "questions": [
        {
          "id": 1,
          "question": "Question text here?",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correctAnswer": 0,
          "explanation": "Explanation of why this answer is correct"
        }
      ]
    }
    
    Make sure the questions are educational, clear, and the correctAnswer is the index (0-3) of the correct option.`;

    const response = await fetch(API_CONFIG.OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: API_CONFIG.DEFAULT_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are an expert quiz generator. Always respond with valid JSON format as requested.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: API_CONFIG.TEMPERATURE,
        max_tokens: API_CONFIG.MAX_TOKENS
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    let quizData;
    try {
      // Parse the JSON response
      quizData = JSON.parse(content);
    } catch (parseError) {
      // Retry once on parse error
      console.warn('JSON parse error, retrying once...');
      const retryResponse = await fetch(API_CONFIG.OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: API_CONFIG.DEFAULT_MODEL,
          messages: [
            {
              role: 'system',
              content: 'You are an expert quiz generator. Always respond with valid JSON format as requested. Do not include any additional text outside the JSON.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: API_CONFIG.TEMPERATURE,
          max_tokens: API_CONFIG.MAX_TOKENS
        })
      });

      if (!retryResponse.ok) {
        throw new Error(`OpenAI API retry error: ${retryResponse.status} ${retryResponse.statusText}`);
      }

      const retryData = await retryResponse.json();
      const retryContent = retryData.choices[0].message.content;
      quizData = JSON.parse(retryContent);
    }
    
    // Validate the response structure
    if (!quizData.success || !quizData.questions || !Array.isArray(quizData.questions) || quizData.questions.length !== quizLength) {
      throw new Error(`Invalid response format from AI: Expected ${quizLength} questions`);
    }

    return quizData;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`Failed to generate quiz questions: ${error.message}`);
  }
};

// Generate personalized feedback using OpenAI
export const generateFeedbackWithAI = async (score, totalQuestions, topic, answers, questions) => {
  // Fallback to mock data if API key is not configured
  if (!isAPIConfigured()) {
    console.warn('OpenAI API key not configured. Using mock feedback.');
    return generateMockFeedback(score, totalQuestions, topic);
  }

  try {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const prompt = `Generate personalized feedback for a quiz about "${topic}". 
    Score: ${score}/${totalQuestions} (${percentage}%)
    
    Provide feedback as a JSON object with this structure:
    {
      "success": true,
      "feedback": {
        "score": ${score},
        "total": ${totalQuestions},
        "percentage": ${percentage},
        "message": "Personalized message based on performance",
        "suggestions": ["Suggestion 1", "Suggestion 2", "Suggestion 3"],
        "encouragement": "Motivational message"
      }
    }
    
    Make the feedback encouraging, specific to the topic, and provide actionable suggestions for improvement.`;

    const response = await fetch(API_CONFIG.OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: API_CONFIG.DEFAULT_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are an encouraging educational tutor. Always respond with valid JSON format as requested.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    let feedbackData;
    try {
      // Parse the JSON response
      feedbackData = JSON.parse(content);
    } catch (parseError) {
      // Retry once on parse error
      console.warn('JSON parse error for feedback, retrying once...');
      const retryResponse = await fetch(API_CONFIG.OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: API_CONFIG.DEFAULT_MODEL,
          messages: [
            {
              role: 'system',
              content: 'You are an encouraging educational tutor. Always respond with valid JSON format as requested. Do not include any additional text outside the JSON.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: 1000
        })
      });

      if (!retryResponse.ok) {
        throw new Error(`OpenAI API retry error: ${retryResponse.status} ${retryResponse.statusText}`);
      }

      const retryData = await retryResponse.json();
      const retryContent = retryData.choices[0].message.content;
      feedbackData = JSON.parse(retryContent);
    }
    
    // Validate the response structure
    if (!feedbackData.success || !feedbackData.feedback) {
      throw new Error('Invalid feedback format from AI');
    }

    return feedbackData;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`Failed to generate feedback: ${error.message}`);
  }
};



// Get available topics (now dynamic)
export const getAvailableTopics = () => {
  return [
    { id: 'Wellness', name: 'Wellness', description: 'Health, fitness, and mental well-being' },
    { id: 'Tech Trends', name: 'Tech Trends', description: 'Latest technology developments and innovations' },
    { id: 'Science', name: 'Science', description: 'General science knowledge and discoveries' },
    { id: 'History', name: 'History', description: 'Historical events, figures, and civilizations' },
    { id: 'Geography', name: 'Geography', description: 'World geography, countries, and cultures' },
    { id: 'Literature', name: 'Literature', description: 'Books, authors, and literary works' },
    { id: 'Mathematics', name: 'Mathematics', description: 'Mathematical concepts and problem-solving' },
    { id: 'Art', name: 'Art', description: 'Visual arts, music, and creative expression' }
  ];
};

const generateMockQuizQuestions = async (topic, quizLength = 5) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const mockQuestions = {
    'Wellness': [
      {
        id: 1,
        question: "What is the recommended daily water intake for adults?",
        options: ["6-8 glasses", "8-10 glasses", "10-12 glasses", "12-14 glasses"],
        correctAnswer: 1,
        explanation: "The general recommendation is 8-10 glasses (about 2-2.5 liters) of water per day for adults."
      },
      {
        id: 2,
        question: "Which vitamin is primarily obtained from sunlight exposure?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correctAnswer: 2,
        explanation: "Vitamin D is synthesized in the skin when exposed to UVB rays from sunlight."
      },
      {
        id: 3,
        question: "What is the recommended amount of sleep for adults?",
        options: ["6-7 hours", "7-9 hours", "9-11 hours", "11-13 hours"],
        correctAnswer: 1,
        explanation: "Adults should aim for 7-9 hours of quality sleep per night for optimal health."
      },
      {
        id: 4,
        question: "Which exercise is best for cardiovascular health?",
        options: ["Weight lifting", "Aerobic exercise", "Stretching", "Balance training"],
        correctAnswer: 1,
        explanation: "Aerobic exercises like running, swimming, or cycling are most effective for cardiovascular health."
      },
      {
        id: 5,
        question: "What is the primary benefit of meditation?",
        options: ["Increased muscle mass", "Stress reduction", "Better eyesight", "Faster metabolism"],
        correctAnswer: 1,
        explanation: "Meditation primarily helps reduce stress, improve focus, and promote mental well-being."
      }
    ],
    'Tech Trends': [
      {
        id: 1,
        question: "What does AI stand for in technology?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence - the simulation of human intelligence in machines."
      },
      {
        id: 2,
        question: "Which technology is primarily used for secure cryptocurrency transactions?",
        options: ["HTTP", "Blockchain", "Cloud computing", "Machine learning"],
        correctAnswer: 1,
        explanation: "Blockchain technology provides the secure, decentralized ledger system for cryptocurrency transactions."
      },
      {
        id: 3,
        question: "What is the main advantage of 5G networks?",
        options: ["Lower cost", "Faster speeds and lower latency", "Better security", "Longer battery life"],
        correctAnswer: 1,
        explanation: "5G offers significantly faster speeds and much lower latency compared to previous generations."
      },
      {
        id: 4,
        question: "Which programming paradigm is most associated with AI development?",
        options: ["Object-oriented", "Functional", "Machine learning", "Procedural"],
        correctAnswer: 2,
        explanation: "Machine learning is the programming paradigm most closely associated with AI development."
      },
      {
        id: 5,
        question: "What does IoT stand for?",
        options: ["Internet of Things", "Integration of Technology", "Intelligent Operating Terminal", "Interactive Online Tools"],
        correctAnswer: 0,
        explanation: "IoT stands for Internet of Things - the network of physical devices connected to the internet."
      }
    ],
    'Science': [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface."
      },
      {
        id: 3,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
        correctAnswer: 2,
        explanation: "Mitochondria are known as the powerhouse of the cell because they generate ATP energy."
      },
      {
        id: 4,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
      },
      {
        id: 5,
        question: "What is the speed of light in a vacuum?",
        options: ["299,792 km/s", "300,000 km/s", "299,792,458 m/s", "299,792,458 km/s"],
        correctAnswer: 2,
        explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second."
      }
    ],
    'History': [
      {
        id: 1,
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correctAnswer: 1,
        explanation: "World War II ended in 1945 with the surrender of Japan."
      },
      {
        id: 2,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: 2,
        explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
      },
      {
        id: 3,
        question: "Which ancient civilization built the pyramids at Giza?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswer: 2,
        explanation: "The ancient Egyptians built the Great Pyramids at Giza around 2580–2565 BC."
      },
      {
        id: 4,
        question: "When did the Industrial Revolution begin?",
        options: ["18th century", "19th century", "17th century", "20th century"],
        correctAnswer: 0,
        explanation: "The Industrial Revolution began in the late 18th century in Britain."
      },
      {
        id: 5,
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
        correctAnswer: 1,
        explanation: "Julius Caesar was a Roman statesman and military general who played a critical role in the transformation of the Roman Republic into the Roman Empire."
      }
    ],
    'Geography': [
      {
        id: 1,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        explanation: "Canberra is the capital city of Australia."
      },
      {
        id: 2,
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
        explanation: "The Nile River is considered the longest river in the world, stretching about 6,650 km."
      },
      {
        id: 3,
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correctAnswer: 2,
        explanation: "Vatican City is the smallest country in the world by land area and population."
      },
      {
        id: 4,
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: 1,
        explanation: "The Sahara Desert is located in Africa, covering parts of several countries including Algeria, Egypt, and Morocco."
      },
      {
        id: 5,
        question: "What is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
        correctAnswer: 3,
        explanation: "Mount Everest is the highest mountain in the world, with a peak at 8,848 meters above sea level."
      }
    ],
    'Literature': [
      {
        id: 1,
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Mary Shelley"],
        correctAnswer: 1,
        explanation: "Jane Austen wrote 'Pride and Prejudice' in 1813."
      },
      {
        id: 2,
        question: "What is the name of the hobbit in J.R.R. Tolkien's famous trilogy?",
        options: ["Frodo", "Bilbo", "Samwise", "Gandalf"],
        correctAnswer: 0,
        explanation: "Frodo Baggins is the main character in 'The Lord of the Rings' trilogy."
      },
      {
        id: 3,
        question: "Which Shakespeare play features the characters Romeo and Juliet?",
        options: ["Hamlet", "Macbeth", "Othello", "Romeo and Juliet"],
        correctAnswer: 3,
        explanation: "'Romeo and Juliet' is one of William Shakespeare's most famous tragedies."
      },
      {
        id: 4,
        question: "Who is the author of '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Margaret Atwood"],
        correctAnswer: 1,
        explanation: "George Orwell wrote '1984' in 1949 as a dystopian novel."
      },
      {
        id: 5,
        question: "What genre is 'The Great Gatsby' considered?",
        options: ["Science fiction", "Romance", "Literary fiction", "Mystery"],
        correctAnswer: 2,
        explanation: "'The Great Gatsby' by F. Scott Fitzgerald is a classic work of American literary fiction."
      }
    ],
    'Mathematics': [
      {
        id: 1,
        question: "What is the value of π (pi) approximately?",
        options: ["3.14", "3.1416", "3.14159", "3.1415926535"],
        correctAnswer: 2,
        explanation: "π is approximately 3.14159, but it is an irrational number with infinite decimal places."
      },
      {
        id: 2,
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 2,
        explanation: "15% of 200 = 0.15 × 200 = 30."
      },
      {
        id: 3,
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        explanation: "The square root of 144 is 12, because 12 × 12 = 144."
      },
      {
        id: 4,
        question: "What is the area of a circle with radius 5 units? (Use π ≈ 3.14)",
        options: ["78.5", "31.4", "15.7", "25"],
        correctAnswer: 0,
        explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 square units."
      },
      {
        id: 5,
        question: "What is 2³ (2 to the power of 3)?",
        options: ["4", "6", "8", "16"],
        correctAnswer: 2,
        explanation: "2³ = 2 × 2 × 2 = 8."
      }
    ],
    'Art': [
      {
        id: 1,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2,
        explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
      },
      {
        id: 2,
        question: "What art movement is Vincent van Gogh associated with?",
        options: ["Impressionism", "Post-Impressionism", "Cubism", "Surrealism"],
        correctAnswer: 1,
        explanation: "Vincent van Gogh is associated with Post-Impressionism, though he was influenced by Impressionism."
      },
      {
        id: 3,
        question: "Which artist is famous for cutting off his own ear?",
        options: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: 2,
        explanation: "Vincent van Gogh cut off part of his left ear in 1888."
      },
      {
        id: 4,
        question: "What is the primary medium used in fresco painting?",
        options: ["Oil", "Watercolor", "Pigments on wet plaster", "Acrylic"],
        correctAnswer: 2,
        explanation: "Fresco painting involves applying pigments to wet plaster, which creates a durable artwork."
      },
      {
        id: 5,
        question: "Which period is Michelangelo's David from?",
        options: ["Ancient Greek", "Renaissance", "Baroque", "Modern"],
        correctAnswer: 1,
        explanation: "Michelangelo's David was sculpted during the Renaissance period in 1501-1504."
      }
    ]
  };

  const questions = mockQuestions[topic] || mockQuestions['Wellness'];
  
  return {
    success: true,
    topic: topic,
    description: `AI-generated questions about ${topic}`,
    questions: questions
  };
};

const generateMockFeedback = async (score, totalQuestions, topic) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  let suggestions = [];
  
  if (percentage >= 90) {
    message = `Outstanding! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. You have excellent knowledge in this area!`;
    suggestions = [
      "Consider exploring advanced topics in this field",
      "Share your knowledge with others",
      "Look for opportunities to apply this knowledge practically"
    ];
  } else if (percentage >= 70) {
    message = `Great job! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. You have solid knowledge with room for improvement.`;
    suggestions = [
      "Review the questions you missed",
      "Explore additional resources on this topic",
      "Practice with more quizzes to strengthen your knowledge"
    ];
  } else if (percentage >= 50) {
    message = `Good effort! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. There's potential for significant improvement.`;
    suggestions = [
      "Study the fundamental concepts more thoroughly",
      "Take notes on areas that need work",
      "Consider finding a study partner or mentor"
    ];
  } else {
    message = `Keep learning! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. Every expert was once a beginner.`;
    suggestions = [
      "Start with the basics and build up gradually",
      "Use multiple learning resources (books, videos, courses)",
      "Don't be discouraged - learning is a journey"
    ];
  }
  
  return {
    success: true,
    feedback: {
      score: score,
      total: totalQuestions,
      percentage: percentage,
      message: message,
      suggestions: suggestions,
      encouragement: "Keep up the great work and continue learning!"
    }
  };
};
