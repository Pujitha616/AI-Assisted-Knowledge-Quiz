// Intelligent Chatbot Service with Knowledge Base Integration
// Provides context-aware, educational responses using structured data

import { KNOWLEDGE_BASE, QUESTION_PATTERNS, RESPONSE_TEMPLATES } from '../data/knowledgeBase';
import { ADVANCED_KNOWLEDGE_BASE, EXTENDED_QUESTION_PATTERNS, ENHANCED_RESPONSE_TEMPLATES, LEARNING_OBJECTIVES } from '../data/advancedKnowledgeBase';

// Enhanced chat function with knowledge base integration
export const chatWithIntelligentAI = async (message, topic, conversationHistory = []) => {
  try {
    // First, try to find a direct answer in our knowledge base
    const knowledgeAnswer = findKnowledgeBaseAnswer(message, topic);
    
    if (knowledgeAnswer) {
      return formatKnowledgeResponse(knowledgeAnswer, topic);
    }

    // If no direct match, use pattern matching for related topics
    const patternAnswer = findPatternMatch(message, topic);
    if (patternAnswer) {
      return formatPatternResponse(patternAnswer, topic);
    }

    // Try to find answer in other topics (cross-topic search)
    const crossTopicAnswer = findCrossTopicAnswer(message);
    if (crossTopicAnswer) {
      return formatCrossTopicResponse(crossTopicAnswer, topic);
    }

    // If still no match, generate contextual response
    return generateContextualResponse(message, topic, conversationHistory);
    
  } catch (error) {
    console.error('Intelligent Chat Error:', error);
    return generateFallbackResponse(topic);
  }
};

// Find direct answer in knowledge base
const findKnowledgeBaseAnswer = (message, topic) => {
  // Check both knowledge bases
  const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
  if (!topicData) return null;

  const messageLower = message.toLowerCase();
  
  // Check FAQs first - improved matching
  for (const faq of topicData.faqs) {
    let matchCount = 0;
    let totalKeywords = faq.keywords.length;
    
    // Count keyword matches
    for (const keyword of faq.keywords) {
      if (messageLower.includes(keyword.toLowerCase())) {
        matchCount++;
      }
    }
    
    // If we have a good match (at least 2 keywords or 50% match)
    if (matchCount >= 2 || (matchCount / totalKeywords) >= 0.5) {
      return {
        type: 'faq',
        answer: faq.answer,
        question: faq.question,
        confidence: Math.min(0.9, 0.7 + (matchCount / totalKeywords) * 0.2)
      };
    }
  }

  // Check if message contains topic keywords
  for (const keyTopic of topicData.keyTopics) {
    if (messageLower.includes(keyTopic.toLowerCase())) {
      return {
        type: 'topic',
        answer: `Great question about ${keyTopic}! This is an important aspect of ${topic}. ` +
                `Would you like me to explain more about ${keyTopic} or any specific aspect of it?`,
        confidence: 0.7
      };
    }
  }

  return null;
};

// Find pattern-based matches
const findPatternMatch = (message, topic) => {
  const patterns = QUESTION_PATTERNS[topic] || EXTENDED_QUESTION_PATTERNS[topic];
  if (!patterns) return null;

  for (const pattern of patterns) {
    if (pattern.test(message)) {
      const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
      if (topicData && topicData.faqs.length > 0) {
        // Return a relevant FAQ
        const relevantFaq = topicData.faqs[Math.floor(Math.random() * topicData.faqs.length)];
        return {
          type: 'pattern',
          answer: relevantFaq.answer,
          question: relevantFaq.question,
          confidence: 0.8
        };
      }
    }
  }

  return null;
};

// Find answer in other topics (cross-topic search)
const findCrossTopicAnswer = (message) => {
  const messageLower = message.toLowerCase();
  
  // Search all topics for relevant answers
  const allTopics = { ...KNOWLEDGE_BASE, ...ADVANCED_KNOWLEDGE_BASE };
  
  for (const [topicName, topicData] of Object.entries(allTopics)) {
    for (const faq of topicData.faqs) {
      let matchCount = 0;
      let totalKeywords = faq.keywords.length;
      
      // Count keyword matches
      for (const keyword of faq.keywords) {
        if (messageLower.includes(keyword.toLowerCase())) {
          matchCount++;
        }
      }
      
      // If we have a good match
      if (matchCount >= 2 || (matchCount / totalKeywords) >= 0.5) {
        return {
          type: 'cross-topic',
          answer: faq.answer,
          question: faq.question,
          topic: topicName,
          confidence: Math.min(0.8, 0.6 + (matchCount / totalKeywords) * 0.2)
        };
      }
    }
  }
  
  return null;
};

// Format cross-topic response
const formatCrossTopicResponse = (crossTopicAnswer, currentTopic) => {
  let response = `Great question! While we're discussing ${currentTopic}, `;
  response += `this relates to ${crossTopicAnswer.topic}: `;
  response += crossTopicAnswer.answer;
  response += ` Would you like to learn more about ${crossTopicAnswer.topic} or continue with ${currentTopic}?`;
  
  return response;
};

// Generate contextual response based on conversation history
const generateContextualResponse = (message, topic, conversationHistory) => {
  const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
  const recentTopics = extractRecentTopics(conversationHistory);
  
  // Build context-aware response
  let response = getRandomTemplate('greeting', topic);
  
  if (recentTopics.length > 0) {
    response += ` I notice we've been discussing ${recentTopics.join(', ')}. `;
  }
  
  response += `Regarding your question about "${message}", `;
  response += `let me share some insights about ${topic}. `;
  
  // Add relevant facts
  if (topicData && topicData.facts.length > 0) {
    const randomFact = topicData.facts[Math.floor(Math.random() * topicData.facts.length)];
    response += `Here's an interesting fact: ${randomFact}. `;
  }
  
  response += getRandomTemplate('followUp', topic);
  
  return response;
};

// Format knowledge base response
const formatKnowledgeResponse = (knowledgeAnswer, topic) => {
  let response = '';
  
  if (knowledgeAnswer.type === 'faq') {
    response = getRandomTemplate('clarification', topic)
      .replace('{answer}', knowledgeAnswer.answer);
  } else {
    response = knowledgeAnswer.answer;
  }
  
  // Add encouragement
  response += ' ' + getRandomTemplate('encouragement', topic);
  
  // Add follow-up question
  response += ' ' + getRandomTemplate('followUp', topic);
  
  return response;
};

// Format pattern-based response
const formatPatternResponse = (patternAnswer, topic) => {
  let response = getRandomTemplate('clarification', topic)
    .replace('{answer}', patternAnswer.answer);
  
  response += ' ' + getRandomTemplate('followUp', topic);
  
  return response;
};

// Generate fallback response
const generateFallbackResponse = (topic) => {
  const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
  
  if (topicData) {
    return `I'm here to help you learn about ${topic}! ` +
           `Some key areas we can explore include: ${topicData.keyTopics.slice(0, 3).join(', ')}. ` +
           `What specific aspect of ${topic} interests you most?`;
  }
  
  return `I'm your AI tutor for ${topic}. I'm here to help you learn and explore this fascinating subject. ` +
         `What would you like to know about ${topic}?`;
};

// Extract recent topics from conversation history
const extractRecentTopics = (conversationHistory) => {
  const topics = [];
  const recentMessages = conversationHistory.slice(-3); // Last 3 messages
  
  for (const message of recentMessages) {
    if (message.role === 'user') {
      // Simple keyword extraction
      const words = message.content.toLowerCase().split(' ');
      topics.push(...words.filter(word => word.length > 4));
    }
  }
  
  return [...new Set(topics)].slice(0, 3); // Remove duplicates, max 3
};

// Get random template
const getRandomTemplate = (type, topic) => {
  const templates = RESPONSE_TEMPLATES[type];
  if (!templates) return '';
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace(/{topic}/g, topic);
};

// Enhanced question generation with knowledge base
export const generateIntelligentQuestions = async (topic, difficulty = 'medium') => {
  const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
  if (!topicData) return null;

  // Use knowledge base to generate more accurate questions
  const questions = topicData.faqs.map((faq, index) => ({
    id: index + 1,
    question: faq.question,
    options: generateOptionsFromFAQ(faq, topicData.faqs),
    correctAnswer: 0, // First option is always correct
    explanation: faq.answer
  }));

  return {
    success: true,
    topic: topic,
    description: topicData.description,
    questions: questions.slice(0, 5) // Return 5 questions
  };
};

// Generate multiple choice options from FAQ
const generateOptionsFromFAQ = (correctFaq, allFaqs) => {
  const options = [correctFaq.answer];
  
  // Get 3 incorrect options from other FAQs
  const otherFaqs = allFaqs.filter(faq => faq !== correctFaq);
  const shuffled = otherFaqs.sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < 3 && i < shuffled.length; i++) {
    options.push(shuffled[i].answer);
  }
  
  // Shuffle options
  return options.sort(() => 0.5 - Math.random());
};

// Get topic suggestions based on user interest
export const getTopicSuggestions = (userMessage, currentTopic) => {
  const suggestions = [];
  const messageLower = userMessage.toLowerCase();
  
  // Check for cross-topic keywords
  for (const [topic, data] of Object.entries(KNOWLEDGE_BASE)) {
    if (topic === currentTopic) continue;
    
    for (const keyTopic of data.keyTopics) {
      if (messageLower.includes(keyTopic.toLowerCase())) {
        suggestions.push({
          topic: topic,
          reason: `You mentioned "${keyTopic}" which relates to ${topic}`,
          confidence: 0.8
        });
      }
    }
  }
  
  return suggestions.slice(0, 3); // Return top 3 suggestions
};

// Get learning progress based on conversation
export const getLearningProgress = (conversationHistory, topic) => {
  const topicData = KNOWLEDGE_BASE[topic] || ADVANCED_KNOWLEDGE_BASE[topic];
  if (!topicData) return null;
  
  const coveredTopics = new Set();
  const questionsAsked = conversationHistory.filter(msg => msg.role === 'user').length;
  
  // Analyze covered topics
  for (const message of conversationHistory) {
    if (message.role === 'user') {
      for (const keyTopic of topicData.keyTopics) {
        if (message.content.toLowerCase().includes(keyTopic.toLowerCase())) {
          coveredTopics.add(keyTopic);
        }
      }
    }
  }
  
  const progress = {
    topicsCovered: coveredTopics.size,
    totalTopics: topicData.keyTopics.length,
    questionsAsked: questionsAsked,
    progressPercentage: Math.round((coveredTopics.size / topicData.keyTopics.length) * 100),
    nextSuggestedTopics: topicData.keyTopics.filter(topic => !coveredTopics.has(topic)).slice(0, 3)
  };
  
  return progress;
};
