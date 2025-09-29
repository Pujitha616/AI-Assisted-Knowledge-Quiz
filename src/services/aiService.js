// AI Service for generating quiz questions and feedback
// This service simulates AI API calls with consistent JSON output

const QUIZ_TOPICS = {
  'Wellness': {
    description: 'Health, fitness, and mental well-being',
    questions: [
      {
        question: "What is the recommended daily water intake for adults?",
        options: ["6-8 glasses", "8-10 glasses", "10-12 glasses", "12-14 glasses"],
        correctAnswer: 1,
        explanation: "The general recommendation is 8-10 glasses (about 2-2.5 liters) of water per day for adults."
      },
      {
        question: "Which vitamin is primarily obtained from sunlight exposure?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correctAnswer: 2,
        explanation: "Vitamin D is synthesized in the skin when exposed to UVB rays from sunlight."
      },
      {
        question: "What is the recommended amount of sleep for adults?",
        options: ["6-7 hours", "7-9 hours", "9-11 hours", "11-13 hours"],
        correctAnswer: 1,
        explanation: "Adults should aim for 7-9 hours of quality sleep per night for optimal health."
      },
      {
        question: "Which exercise is best for cardiovascular health?",
        options: ["Weight lifting", "Aerobic exercise", "Stretching", "Balance training"],
        correctAnswer: 1,
        explanation: "Aerobic exercises like running, swimming, or cycling are most effective for cardiovascular health."
      },
      {
        question: "What is the primary benefit of meditation?",
        options: ["Increased muscle mass", "Stress reduction", "Better eyesight", "Faster metabolism"],
        correctAnswer: 1,
        explanation: "Meditation primarily helps reduce stress, improve focus, and promote mental well-being."
      }
    ]
  },
  'Tech Trends': {
    description: 'Latest technology developments and innovations',
    questions: [
      {
        question: "What does AI stand for in technology?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence - the simulation of human intelligence in machines."
      },
      {
        question: "Which technology is primarily used for secure cryptocurrency transactions?",
        options: ["HTTP", "Blockchain", "Cloud computing", "Machine learning"],
        correctAnswer: 1,
        explanation: "Blockchain technology provides the secure, decentralized ledger system for cryptocurrency transactions."
      },
      {
        question: "What is the main advantage of 5G networks?",
        options: ["Lower cost", "Faster speeds and lower latency", "Better security", "Longer battery life"],
        correctAnswer: 1,
        explanation: "5G offers significantly faster speeds and much lower latency compared to previous generations."
      },
      {
        question: "Which programming paradigm is most associated with AI development?",
        options: ["Object-oriented", "Functional", "Machine learning", "Procedural"],
        correctAnswer: 2,
        explanation: "Machine learning is the programming paradigm most closely associated with AI development."
      },
      {
        question: "What does IoT stand for?",
        options: ["Internet of Things", "Integration of Technology", "Intelligent Operating Terminal", "Interactive Online Tools"],
        correctAnswer: 0,
        explanation: "IoT stands for Internet of Things - the network of physical devices connected to the internet."
      }
    ]
  },
  'Science': {
    description: 'General science knowledge and discoveries',
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface."
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: 0,
        explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second."
      },
      {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen is about 21%."
      },
      {
        question: "What is the smallest unit of matter?",
        options: ["Molecule", "Atom", "Proton", "Electron"],
        correctAnswer: 1,
        explanation: "An atom is the smallest unit of matter that retains the properties of an element."
      }
    ]
  }
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate quiz questions for a given topic
export const generateQuizQuestions = async (topic) => {
  try {
    // Simulate API call delay
    await delay(2000);
    
    if (!QUIZ_TOPICS[topic]) {
      throw new Error(`Topic "${topic}" not found`);
    }
    
    const topicData = QUIZ_TOPICS[topic];
    
    // Return questions in the expected format
    return {
      success: true,
      topic: topic,
      description: topicData.description,
      questions: topicData.questions.map((q, index) => ({
        id: index + 1,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      }))
    };
  } catch (error) {
    throw new Error(`Failed to generate quiz questions: ${error.message}`);
  }
};

// Generate custom feedback based on score
export const generateFeedback = async (score, totalQuestions, topic) => {
  try {
    // Simulate API call delay
    await delay(1500);
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let feedback = {
      score: score,
      total: totalQuestions,
      percentage: percentage,
      message: "",
      suggestions: []
    };
    
    if (percentage >= 90) {
      feedback.message = `Outstanding! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. You have excellent knowledge in this area!`;
      feedback.suggestions = [
        "Consider exploring advanced topics in this field",
        "Share your knowledge with others",
        "Look for opportunities to apply this knowledge practically"
      ];
    } else if (percentage >= 70) {
      feedback.message = `Great job! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. You have solid knowledge with room for improvement.`;
      feedback.suggestions = [
        "Review the questions you missed",
        "Explore additional resources on this topic",
        "Practice with more quizzes to strengthen your knowledge"
      ];
    } else if (percentage >= 50) {
      feedback.message = `Good effort! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. There's potential for significant improvement.`;
      feedback.suggestions = [
        "Study the fundamental concepts more thoroughly",
        "Take notes on areas that need work",
        "Consider finding a study partner or mentor"
      ];
    } else {
      feedback.message = `Keep learning! You scored ${score}/${totalQuestions} (${percentage}%) on ${topic}. Every expert was once a beginner.`;
      feedback.suggestions = [
        "Start with the basics and build up gradually",
        "Use multiple learning resources (books, videos, courses)",
        "Don't be discouraged - learning is a journey"
      ];
    }
    
    return {
      success: true,
      feedback: feedback
    };
  } catch (error) {
    throw new Error(`Failed to generate feedback: ${error.message}`);
  }
};

// Get available topics
export const getAvailableTopics = () => {
  return Object.keys(QUIZ_TOPICS).map(topic => ({
    id: topic,
    name: topic,
    description: QUIZ_TOPICS[topic].description
  }));
};
