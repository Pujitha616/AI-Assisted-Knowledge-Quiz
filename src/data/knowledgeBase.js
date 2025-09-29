// Comprehensive Knowledge Base for AI Chatbot Training
// This provides structured data for accurate, educational responses

export const KNOWLEDGE_BASE = {
  'Wellness': {
    description: 'Health, fitness, and mental well-being',
    keyTopics: [
      'Nutrition', 'Exercise', 'Mental Health', 'Sleep', 'Stress Management',
      'Hydration', 'Meditation', 'Yoga', 'Cardiovascular Health', 'Weight Management'
    ],
    faqs: [
      {
        question: "What is the recommended daily water intake?",
        answer: "The general recommendation is 8-10 glasses (about 2-2.5 liters) of water per day for adults. However, individual needs vary based on activity level, climate, and overall health.",
        keywords: ["water", "hydration", "daily intake", "glasses", "liters"]
      },
      {
        question: "How much sleep do adults need?",
        answer: "Adults should aim for 7-9 hours of quality sleep per night. Consistent sleep schedule and good sleep hygiene are crucial for optimal health and cognitive function.",
        keywords: ["sleep", "hours", "adults", "quality", "schedule"]
      },
      {
        question: "What are the benefits of regular exercise?",
        answer: "Regular exercise improves cardiovascular health, strengthens muscles and bones, enhances mental health, boosts immune system, helps with weight management, and increases energy levels.",
        keywords: ["exercise", "benefits", "cardiovascular", "mental health", "weight"]
      },
      {
        question: "How can I manage stress effectively?",
        answer: "Effective stress management includes deep breathing exercises, meditation, regular physical activity, adequate sleep, time management, social support, and engaging in hobbies you enjoy.",
        keywords: ["stress", "management", "meditation", "breathing", "exercise"]
      },
      {
        question: "What is a balanced diet?",
        answer: "A balanced diet includes fruits, vegetables, whole grains, lean proteins, healthy fats, and limited processed foods. It provides essential nutrients while maintaining appropriate calorie intake.",
        keywords: ["diet", "balanced", "fruits", "vegetables", "proteins", "nutrients"]
      }
    ],
    facts: [
      "Regular exercise can reduce the risk of chronic diseases by up to 30%",
      "Meditation for just 10 minutes daily can improve focus and reduce anxiety",
      "Drinking water before meals can help with weight management",
      "Adequate sleep is essential for memory consolidation and learning",
      "Social connections are as important for health as exercise and nutrition"
    ]
  },

  'Tech Trends': {
    description: 'Latest technology developments and innovations',
    keyTopics: [
      'Frontend Development', 'Backend Development', 'Full-Stack Development', 'Web Development',
      'Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Cloud Computing',
      'IoT', '5G', 'Cybersecurity', 'Quantum Computing', 'AR/VR', 'Edge Computing'
    ],
    faqs: [
      {
        question: "What is the difference between frontend and backend?",
        answer: "Frontend is the client-side part of a web application that users interact with (HTML, CSS, JavaScript, React, Vue). Backend is the server-side part that handles data processing, business logic, and database operations (Node.js, Python, Java, PHP). Frontend runs in the browser, backend runs on the server.",
        keywords: ["frontend", "backend", "client-side", "server-side", "web development", "difference", "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "PHP", "browser", "server"]
      },
      {
        question: "What is full-stack development?",
        answer: "Full-stack development involves working on both frontend and backend parts of a web application. A full-stack developer can handle the entire development process from user interface to server logic and database management.",
        keywords: ["full-stack", "development", "frontend", "backend", "web application", "developer", "user interface", "server logic", "database"]
      },
      {
        question: "What is artificial intelligence?",
        answer: "Artificial Intelligence (AI) is the simulation of human intelligence in machines, enabling them to perform tasks that typically require human cognition, such as learning, reasoning, and problem-solving.",
        keywords: ["AI", "artificial intelligence", "machines", "learning", "reasoning"]
      },
      {
        question: "How does blockchain work?",
        answer: "Blockchain is a distributed ledger technology that records transactions across multiple computers. Each block contains a cryptographic hash of the previous block, creating an immutable chain of data.",
        keywords: ["blockchain", "distributed", "ledger", "cryptographic", "immutable"]
      },
      {
        question: "What is the difference between AI and machine learning?",
        answer: "AI is the broader concept of machines performing intelligent tasks, while machine learning is a subset of AI that focuses on algorithms learning from data without explicit programming.",
        keywords: ["AI", "machine learning", "algorithms", "data", "programming"]
      },
      {
        question: "What are the benefits of 5G technology?",
        answer: "5G offers significantly faster speeds (up to 10 Gbps), lower latency (1ms), higher capacity, and better connectivity for IoT devices, enabling new applications like autonomous vehicles and smart cities.",
        keywords: ["5G", "speed", "latency", "IoT", "autonomous vehicles"]
      },
      {
        question: "What is cloud computing?",
        answer: "Cloud computing delivers computing services over the internet, including servers, storage, databases, networking, and software, providing on-demand access to resources without direct management.",
        keywords: ["cloud", "computing", "internet", "servers", "storage", "on-demand"]
      },
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, particularly web applications. It uses a component-based architecture and virtual DOM for efficient rendering and state management.",
        keywords: ["React", "JavaScript", "library", "user interface", "web application", "component", "virtual DOM", "rendering", "state management"]
      },
      {
        question: "What is Node.js?",
        answer: "Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side. It's built on Chrome's V8 JavaScript engine and enables building scalable network applications.",
        keywords: ["Node.js", "JavaScript", "runtime", "server-side", "V8", "scalable", "network applications"]
      },
      {
        question: "What is a database?",
        answer: "A database is an organized collection of data stored and accessed electronically. Common types include relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis) for different data storage needs.",
        keywords: ["database", "data", "storage", "relational", "MySQL", "PostgreSQL", "NoSQL", "MongoDB", "Redis"]
      }
    ],
    facts: [
      "The global AI market is expected to reach $1.8 trillion by 2030",
      "5G networks can support up to 1 million devices per square kilometer",
      "Quantum computers could solve certain problems exponentially faster than classical computers",
      "Edge computing reduces latency by processing data closer to its source",
      "Cybersecurity spending is projected to exceed $200 billion annually by 2025",
      "React was created by Facebook and is used by Netflix, Airbnb, and Instagram",
      "Node.js allows JavaScript to run on servers, not just browsers",
      "The first website was created in 1991 by Tim Berners-Lee"
    ]
  },

  'Science': {
    description: 'General science knowledge and discoveries',
    keyTopics: [
      'Physics', 'Chemistry', 'Biology', 'Astronomy', 'Earth Science',
      'Mathematics', 'Medicine', 'Environmental Science', 'Genetics', 'Evolution'
    ],
    faqs: [
      {
        question: "What is the speed of light?",
        answer: "The speed of light in a vacuum is approximately 299,792,458 meters per second (about 300,000 km/s). It's the fastest speed at which all energy, matter, and information can travel.",
        keywords: ["speed of light", "vacuum", "meters per second", "km/s", "fastest"]
      },
      {
        question: "What is DNA?",
        answer: "DNA (Deoxyribonucleic Acid) is the hereditary material in humans and almost all other organisms. It contains the genetic instructions for development, functioning, growth, and reproduction.",
        keywords: ["DNA", "hereditary", "genetic", "instructions", "reproduction"]
      },
      {
        question: "How do vaccines work?",
        answer: "Vaccines work by introducing a weakened or inactive form of a pathogen to stimulate the immune system to produce antibodies, providing immunity against future infections.",
        keywords: ["vaccines", "immune system", "antibodies", "pathogen", "immunity"]
      },
      {
        question: "What is photosynthesis?",
        answer: "Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to produce glucose and oxygen. It's essential for life on Earth as it produces oxygen and forms the base of most food chains.",
        keywords: ["photosynthesis", "plants", "sunlight", "glucose", "oxygen"]
      },
      {
        question: "What is the theory of evolution?",
        answer: "The theory of evolution explains how species change over time through natural selection, genetic variation, and adaptation to environmental pressures, leading to the diversity of life on Earth.",
        keywords: ["evolution", "natural selection", "genetic variation", "adaptation", "species"]
      }
    ],
    facts: [
      "The human brain contains approximately 86 billion neurons",
      "Water covers about 71% of Earth's surface",
      "The periodic table has 118 known elements",
      "Light from the Sun takes about 8 minutes to reach Earth",
      "The human body is made up of about 60% water"
    ]
  },

  'History': {
    description: 'Historical events, figures, and civilizations',
    keyTopics: [
      'Ancient Civilizations', 'World Wars', 'Renaissance', 'Industrial Revolution',
      'Colonialism', 'Revolutionary Movements', 'Cultural Developments', 'Political Systems'
    ],
    faqs: [
      {
        question: "When did World War II end?",
        answer: "World War II ended on September 2, 1945, when Japan formally surrendered. The war in Europe had ended earlier on May 8, 1945 (V-E Day).",
        keywords: ["World War II", "1945", "Japan", "surrender", "V-E Day"]
      },
      {
        question: "Who was Leonardo da Vinci?",
        answer: "Leonardo da Vinci was an Italian Renaissance polymath known for his paintings (Mona Lisa, The Last Supper), inventions, scientific studies, and contributions to art, science, and engineering.",
        keywords: ["Leonardo da Vinci", "Renaissance", "Mona Lisa", "inventor", "artist"]
      },
      {
        question: "What was the Industrial Revolution?",
        answer: "The Industrial Revolution (1760-1840) was a period of major industrialization and innovation that transformed manufacturing, transportation, and society, beginning in Britain and spreading worldwide.",
        keywords: ["Industrial Revolution", "1760", "industrialization", "manufacturing", "Britain"]
      },
      {
        question: "What was the Renaissance?",
        answer: "The Renaissance (14th-17th centuries) was a period of cultural, artistic, political, and economic rebirth in Europe, marked by renewed interest in classical learning and humanistic philosophy.",
        keywords: ["Renaissance", "14th century", "cultural", "artistic", "classical learning"]
      },
      {
        question: "Who was Julius Caesar?",
        answer: "Julius Caesar was a Roman general, statesman, and dictator who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
        keywords: ["Julius Caesar", "Roman", "general", "dictator", "Roman Empire"]
      }
    ],
    facts: [
      "The Great Wall of China is over 13,000 miles long",
      "The Library of Alexandria was one of the largest libraries of the ancient world",
      "The printing press was invented by Johannes Gutenberg around 1440",
      "The Roman Empire lasted for over 1,000 years",
      "The Black Death killed an estimated 30-60% of Europe's population in the 14th century"
    ]
  },

  'Geography': {
    description: 'World geography, countries, and cultures',
    keyTopics: [
      'Continents', 'Countries', 'Climate', 'Physical Features', 'Population',
      'Cultures', 'Languages', 'Economies', 'Political Systems', 'Natural Resources'
    ],
    faqs: [
      {
        question: "What is the largest continent?",
        answer: "Asia is the largest continent by both land area and population, covering about 30% of Earth's total land area and home to over 4.6 billion people.",
        keywords: ["Asia", "largest", "continent", "population", "land area"]
      },
      {
        question: "What is the longest river in the world?",
        answer: "The Nile River is considered the longest river in the world at approximately 4,135 miles (6,650 km), flowing through 11 countries in northeastern Africa.",
        keywords: ["Nile River", "longest", "river", "miles", "Africa"]
      },
      {
        question: "What is the smallest country?",
        answer: "Vatican City is the smallest country in the world by both area (0.17 square miles) and population (about 800 people), located within Rome, Italy.",
        keywords: ["Vatican City", "smallest", "country", "square miles", "Rome"]
      },
      {
        question: "What is the highest mountain?",
        answer: "Mount Everest is the highest mountain above sea level at 29,032 feet (8,849 meters), located in the Himalayas on the border between Nepal and China.",
        keywords: ["Mount Everest", "highest", "mountain", "Himalayas", "Nepal"]
      },
      {
        question: "What is the largest ocean?",
        answer: "The Pacific Ocean is the largest ocean, covering more than 30% of Earth's surface and containing more than half of the world's free water.",
        keywords: ["Pacific Ocean", "largest", "ocean", "30%", "surface"]
      }
    ],
    facts: [
      "Russia spans 11 time zones",
      "The Amazon Rainforest produces 20% of the world's oxygen",
      "Antarctica is the driest continent on Earth",
      "The Great Barrier Reef is the world's largest coral reef system",
      "The Sahara Desert is almost the size of the United States"
    ]
  }
};

// Enhanced question patterns for better matching
export const QUESTION_PATTERNS = {
  'Wellness': [
    /what.*water|hydration|drink/i,
    /how.*sleep|rest|tired/i,
    /exercise|workout|fitness/i,
    /stress|anxiety|mental.*health/i,
    /diet|nutrition|food|eat/i,
    /meditation|mindfulness|calm/i
  ],
  'Tech Trends': [
    /frontend|backend|full.*stack|web.*development/i,
    /react|vue|angular|javascript|html|css/i,
    /node.*js|python|java|php|server.*side/i,
    /database|mysql|mongodb|sql/i,
    /ai|artificial.*intelligence|machine.*learning/i,
    /blockchain|crypto|bitcoin/i,
    /5g|network|internet/i,
    /cloud|computing|server/i,
    /cyber.*security|hack|privacy/i,
    /quantum|computing|computer/i,
    /difference.*between|what.*is|how.*does/i
  ],
  'Science': [
    /speed.*light|light.*speed/i,
    /dna|genetic|gene/i,
    /vaccine|immune|antibody/i,
    /photosynthesis|plant|oxygen/i,
    /evolution|darwin|natural.*selection/i,
    /atom|molecule|element/i
  ],
  'History': [
    /world.*war|wwii|ww2/i,
    /leonardo|da.*vinci|renaissance/i,
    /industrial.*revolution|revolution/i,
    /caesar|roman|empire/i,
    /ancient|civilization|egypt/i,
    /medieval|middle.*ages/i
  ],
  'Geography': [
    /continent|asia|africa|europe/i,
    /river|nile|amazon|longest/i,
    /country|smallest|vatican/i,
    /mountain|everest|highest/i,
    /ocean|pacific|largest/i,
    /desert|sahara|antarctica/i
  ]
};

// Context-aware response templates
export const RESPONSE_TEMPLATES = {
  greeting: [
    "Hello! I'm here to help you learn about {topic}. What would you like to know?",
    "Hi there! I'm your AI tutor for {topic}. Feel free to ask me anything!",
    "Welcome! I'm excited to discuss {topic} with you. What questions do you have?"
  ],
  clarification: [
    "That's an interesting question about {topic}. Let me clarify: {answer}",
    "Great question! In the context of {topic}, {answer}",
    "I'd be happy to explain that! Regarding {topic}, {answer}"
  ],
  encouragement: [
    "Excellent question! That shows you're really thinking about {topic}.",
    "That's a great way to approach learning about {topic}!",
    "I love your curiosity about {topic}! Keep asking questions."
  ],
  followUp: [
    "Would you like to know more about any specific aspect of {topic}?",
    "Is there anything else about {topic} you'd like to explore?",
    "What other questions do you have about {topic}?"
  ]
};
