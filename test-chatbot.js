// Test script to verify chatbot training
const { chatWithIntelligentAI } = require('./src/services/intelligentChatbot');

async function testChatbot() {
  console.log('🤖 Testing AI Chatbot Training...\n');

  const testQuestions = [
    {
      question: "What is the difference between frontend and backend?",
      topic: "Tech Trends",
      expected: "Should explain frontend vs backend"
    },
    {
      question: "What is React?",
      topic: "Tech Trends", 
      expected: "Should explain React library"
    },
    {
      question: "What is Node.js?",
      topic: "Tech Trends",
      expected: "Should explain Node.js runtime"
    },
    {
      question: "What is a database?",
      topic: "Tech Trends",
      expected: "Should explain databases"
    },
    {
      question: "What is the speed of light?",
      topic: "Science",
      expected: "Should explain speed of light"
    },
    {
      question: "What is DNA?",
      topic: "Science",
      expected: "Should explain DNA"
    }
  ];

  for (const test of testQuestions) {
    console.log(`❓ Question: ${test.question}`);
    console.log(`📚 Topic: ${test.topic}`);
    
    try {
      const response = await chatWithIntelligentAI(test.question, test.topic, []);
      console.log(`✅ Response: ${response.substring(0, 100)}...`);
      console.log(`🎯 Expected: ${test.expected}`);
      console.log('---\n');
    } catch (error) {
      console.log(`❌ Error: ${error.message}\n`);
    }
  }
}

// Run the test
testChatbot().catch(console.error);
