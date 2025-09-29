// API Configuration
// Replace with your actual OpenAI API key
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY || 'your-openai-api-key-here';

// API Configuration
export const API_CONFIG = {
  OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions',
  DEFAULT_MODEL: 'gpt-3.5-turbo',
  MAX_TOKENS: 2000,
  TEMPERATURE: 0.7
};

// Check if API key is configured
export const isAPIConfigured = () => {
  return OPENAI_API_KEY && OPENAI_API_KEY !== 'your-openai-api-key-here';
};
