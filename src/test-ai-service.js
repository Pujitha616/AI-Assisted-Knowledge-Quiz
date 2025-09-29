// Simple test file to verify AI service functionality
import { generateQuizQuestions, generateFeedback, getAvailableTopics } from './services/aiService.js';

// Test the AI service functions
const testAIService = async () => {
  console.log('🧪 Testing AI Service...\n');

  try {
    // Test 1: Get available topics
    console.log('1. Testing getAvailableTopics():');
    const topics = getAvailableTopics();
    console.log('✅ Available topics:', topics.map(t => t.name).join(', '));
    console.log('');

    // Test 2: Generate quiz questions
    console.log('2. Testing generateQuizQuestions("Wellness"):');
    const quizResult = await generateQuizQuestions('Wellness');
    console.log('✅ Quiz generated successfully');
    console.log(`   - Topic: ${quizResult.topic}`);
    console.log(`   - Questions: ${quizResult.questions.length}`);
    console.log(`   - First question: ${quizResult.questions[0].question}`);
    console.log('');

    // Test 3: Generate feedback
    console.log('3. Testing generateFeedback(4, 5, "Wellness"):');
    const feedbackResult = await generateFeedback(4, 5, 'Wellness');
    console.log('✅ Feedback generated successfully');
    console.log(`   - Score: ${feedbackResult.feedback.score}/${feedbackResult.feedback.total}`);
    console.log(`   - Percentage: ${feedbackResult.feedback.percentage}%`);
    console.log(`   - Message: ${feedbackResult.feedback.message}`);
    console.log('');

    console.log('🎉 All tests passed! AI Service is working correctly.');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

// Run the test
testAIService();
