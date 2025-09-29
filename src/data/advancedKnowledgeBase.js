// Advanced Knowledge Base with Extended Training Data
// Comprehensive datasets for enhanced AI chatbot training

export const ADVANCED_KNOWLEDGE_BASE = {
  'Literature': {
    description: 'Books, authors, and literary works',
    keyTopics: [
      'Classic Literature', 'Modern Literature', 'Poetry', 'Drama', 'Fiction',
      'Non-Fiction', 'Literary Movements', 'Famous Authors', 'Literary Devices', 'Genres'
    ],
    faqs: [
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee wrote 'To Kill a Mockingbird', published in 1960. It's a classic American novel dealing with racial injustice and moral growth.",
        keywords: ["Harper Lee", "To Kill a Mockingbird", "1960", "American novel", "racial injustice"]
      },
      {
        question: "What is the difference between a novel and a novella?",
        answer: "A novel is a long work of fiction (typically 50,000+ words), while a novella is shorter (17,500-50,000 words). Both tell complete stories but differ in length and complexity.",
        keywords: ["novel", "novella", "fiction", "words", "length", "story"]
      },
      {
        question: "What is a metaphor?",
        answer: "A metaphor is a figure of speech that directly compares two different things without using 'like' or 'as'. It creates vivid imagery and deeper meaning in literature.",
        keywords: ["metaphor", "figure of speech", "compare", "imagery", "literature"]
      },
      {
        question: "Who is considered the father of English literature?",
        answer: "Geoffrey Chaucer is often called the father of English literature. His 'Canterbury Tales' (14th century) is one of the most important works in English literary history.",
        keywords: ["Geoffrey Chaucer", "father", "English literature", "Canterbury Tales", "14th century"]
      }
    ],
    facts: [
      "Shakespeare wrote 37 plays and 154 sonnets",
      "The first novel is considered to be 'The Tale of Genji' by Murasaki Shikibu (11th century Japan)",
      "The longest novel ever written is 'In Search of Lost Time' by Marcel Proust (over 1.2 million words)",
      "The Nobel Prize in Literature has been awarded since 1901",
      "The first book printed with movable type was the Gutenberg Bible in 1455"
    ]
  },

  'Mathematics': {
    description: 'Mathematical concepts and problem-solving',
    keyTopics: [
      'Algebra', 'Geometry', 'Calculus', 'Statistics', 'Probability',
      'Trigonometry', 'Number Theory', 'Linear Algebra', 'Discrete Math', 'Applied Math'
    ],
    faqs: [
      {
        question: "What is the Pythagorean theorem?",
        answer: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c².",
        keywords: ["Pythagorean theorem", "right triangle", "hypotenuse", "squares", "a² + b² = c²"]
      },
      {
        question: "What is the value of pi?",
        answer: "Pi (π) is approximately 3.14159, but it's an irrational number with infinite decimal places. It represents the ratio of a circle's circumference to its diameter.",
        keywords: ["pi", "π", "3.14159", "irrational", "circle", "circumference", "diameter"]
      },
      {
        question: "What is the derivative in calculus?",
        answer: "A derivative represents the rate of change of a function at any given point. It's fundamental in calculus and describes how a function changes as its input changes.",
        keywords: ["derivative", "calculus", "rate of change", "function", "input"]
      },
      {
        question: "What is the quadratic formula?",
        answer: "The quadratic formula is x = (-b ± √(b²-4ac)) / 2a, used to solve quadratic equations of the form ax² + bx + c = 0.",
        keywords: ["quadratic formula", "x = (-b ± √(b²-4ac)) / 2a", "quadratic equations", "ax² + bx + c"]
      }
    ],
    facts: [
      "Zero was invented in India around the 5th century",
      "The Fibonacci sequence appears in nature (spiral patterns in shells, flowers)",
      "There are infinitely many prime numbers",
      "The golden ratio (φ) is approximately 1.618 and appears in art and nature",
      "Euler's identity (e^(iπ) + 1 = 0) is considered the most beautiful equation in mathematics"
    ]
  },

  'Art': {
    description: 'Visual arts, music, and creative expression',
    keyTopics: [
      'Painting', 'Sculpture', 'Music', 'Dance', 'Architecture',
      'Photography', 'Digital Art', 'Art History', 'Art Movements', 'Famous Artists'
    ],
    faqs: [
      {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci painted the Mona Lisa between 1503-1519. It's one of the most famous paintings in the world, housed in the Louvre Museum in Paris.",
        keywords: ["Leonardo da Vinci", "Mona Lisa", "1503", "Louvre", "Paris", "famous painting"]
      },
      {
        question: "What is the difference between Renaissance and Baroque art?",
        answer: "Renaissance art (14th-17th centuries) emphasized balance, proportion, and classical themes. Baroque art (17th-18th centuries) featured dramatic lighting, movement, and emotional intensity.",
        keywords: ["Renaissance", "Baroque", "balance", "proportion", "dramatic", "lighting", "movement"]
      },
      {
        question: "What is impressionism?",
        answer: "Impressionism is an art movement that began in 19th-century France, characterized by visible brushstrokes, emphasis on light and color, and scenes of everyday life.",
        keywords: ["impressionism", "19th century", "France", "brushstrokes", "light", "color", "everyday life"]
      },
      {
        question: "Who composed 'The Four Seasons'?",
        answer: "Antonio Vivaldi composed 'The Four Seasons' (Le quattro stagioni) in 1725. It's a set of four violin concertos representing spring, summer, autumn, and winter.",
        keywords: ["Antonio Vivaldi", "Four Seasons", "1725", "violin concertos", "spring", "summer", "autumn", "winter"]
      }
    ],
    facts: [
      "The Sistine Chapel ceiling took Michelangelo 4 years to paint (1508-1512)",
      "Vincent van Gogh only sold one painting during his lifetime",
      "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World",
      "Beethoven composed his 9th Symphony while completely deaf",
      "The first photograph was taken in 1826 by Nicéphore Niépce"
    ]
  }
};

// Extended question patterns for new topics
export const EXTENDED_QUESTION_PATTERNS = {
  'Literature': [
    /book|novel|author|writer|poem|poetry/i,
    /shakespeare|dickens|twain|hemingway/i,
    /metaphor|simile|symbol|theme|plot/i,
    /classic|modern|contemporary|literature/i,
    /genre|fiction|non-fiction|drama/i
  ],
  'Mathematics': [
    /equation|formula|theorem|proof|solve/i,
    /algebra|geometry|calculus|trigonometry/i,
    /number|digit|decimal|fraction|percentage/i,
    /angle|triangle|circle|square|rectangle/i,
    /derivative|integral|function|graph/i
  ],
  'Art': [
    /paint|painting|artist|canvas|brush/i,
    /sculpture|statue|monument|museum/i,
    /music|composer|symphony|orchestra/i,
    /renaissance|baroque|impressionism|modern/i,
    /color|light|shadow|perspective|technique/i
  ]
};

// Enhanced response templates with topic-specific guidance
export const ENHANCED_RESPONSE_TEMPLATES = {
  'Literature': {
    greeting: [
      "Welcome to the world of literature! I'm here to explore stories, authors, and literary techniques with you.",
      "Hello! Let's dive into the fascinating realm of books, poetry, and literary analysis together.",
      "Greetings! I'm excited to discuss literature, from classic novels to modern poetry, with you."
    ],
    encouragement: [
      "That's a wonderful literary question! Your curiosity about literature is inspiring.",
      "Great question! Literature has so many layers to explore and discover.",
      "I love your interest in literature! Every question helps us understand stories better."
    ]
  },
  'Mathematics': {
    greeting: [
      "Hello! I'm here to help you explore the beautiful world of mathematics and problem-solving.",
      "Welcome! Let's work through mathematical concepts and discover the logic behind numbers.",
      "Hi there! I'm excited to help you understand mathematical principles and solve problems together."
    ],
    encouragement: [
      "Excellent mathematical thinking! Your approach to problem-solving is impressive.",
      "That's a great math question! Mathematics is all about understanding patterns and relationships.",
      "I love your mathematical curiosity! Every problem is an opportunity to learn something new."
    ]
  },
  'Art': {
    greeting: [
      "Welcome to the world of art! I'm here to explore creativity, expression, and artistic techniques with you.",
      "Hello! Let's discover the beauty of visual arts, music, and creative expression together.",
      "Greetings! I'm excited to discuss art history, techniques, and the creative process with you."
    ],
    encouragement: [
      "That's a beautiful question about art! Your appreciation for creativity is wonderful.",
      "Great artistic inquiry! Art has so many dimensions to explore and appreciate.",
      "I love your interest in art! Every question helps us understand creativity better."
    ]
  }
};

// Learning objectives for each topic
export const LEARNING_OBJECTIVES = {
  'Wellness': [
    "Understand the importance of physical and mental health",
    "Learn about nutrition and healthy lifestyle choices",
    "Develop stress management techniques",
    "Explore the connection between exercise and well-being"
  ],
  'Tech Trends': [
    "Understand current technology developments",
    "Learn about AI, blockchain, and emerging technologies",
    "Explore the impact of technology on society",
    "Develop digital literacy skills"
  ],
  'Science': [
    "Understand fundamental scientific principles",
    "Learn about the natural world and physical laws",
    "Develop critical thinking and scientific reasoning",
    "Explore the scientific method and discovery process"
  ],
  'History': [
    "Understand historical events and their significance",
    "Learn about different civilizations and cultures",
    "Develop historical thinking and analysis skills",
    "Explore cause and effect in historical events"
  ],
  'Geography': [
    "Understand world geography and physical features",
    "Learn about different countries and cultures",
    "Develop spatial thinking and map skills",
    "Explore the relationship between geography and human activity"
  ],
  'Literature': [
    "Understand literary techniques and devices",
    "Learn about different genres and literary movements",
    "Develop critical reading and analysis skills",
    "Explore the power of language and storytelling"
  ],
  'Mathematics': [
    "Understand mathematical concepts and principles",
    "Learn problem-solving strategies and techniques",
    "Develop logical thinking and reasoning skills",
    "Explore the beauty and applications of mathematics"
  ],
  'Art': [
    "Understand artistic techniques and movements",
    "Learn about famous artists and their contributions",
    "Develop visual literacy and appreciation skills",
    "Explore the role of art in culture and society"
  ]
};
