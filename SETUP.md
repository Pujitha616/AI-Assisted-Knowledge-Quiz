# AI-Assisted Knowledge Quiz - Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the application:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## 🤖 AI Integration Setup

### Option 1: Use with OpenAI API (Recommended)

1. **Get OpenAI API Key:**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account or sign in
   - Generate a new API key

2. **Configure the API Key:**
   - Create a `.env` file in the project root
   - Add your API key:
     ```
     REACT_APP_OPENAI_API_KEY=your-actual-api-key-here
     ```

3. **Restart the application:**
   ```bash
   npm start
   ```

### Option 2: Use Mock Data (No API Key Required)

The application works out-of-the-box with mock data if no API key is configured. You'll see a warning in the console, but the app will function normally with pre-defined questions and responses.

## 🎯 Features

### Quiz Mode
- **Dynamic Question Generation**: AI creates unique questions based on selected topic
- **Interactive Navigation**: Previous/Next buttons with progress tracking
- **AI-Generated Feedback**: Personalized feedback based on performance
- **Multiple Topics**: Wellness, Tech Trends, Science, History, Geography, Literature, Mathematics, Art

### AI Chat Mode
- **Conversational Interface**: Chat with AI about any topic
- **Context-Aware Responses**: AI remembers conversation history
- **Educational Focus**: AI acts as a tutor for the selected topic
- **Real-time Interaction**: Instant responses with typing indicators

## 🔧 Configuration

### API Configuration
Edit `src/config/api.js` to customize:
- API endpoints
- Model settings
- Token limits
- Temperature settings

### Adding New Topics
Edit `src/services/openaiService.js` in the `getAvailableTopics()` function to add new topics.

## 🐛 Troubleshooting

### Common Issues

1. **"OpenAI API key not configured" warning:**
   - This is normal if you haven't set up an API key
   - The app will use mock data instead

2. **API errors:**
   - Check your API key is correct
   - Ensure you have credits in your OpenAI account
   - Check your internet connection

3. **Questions not generating:**
   - Check browser console for errors
   - Verify API key configuration
   - Try refreshing the page

### Error Messages

- **"Failed to generate quiz questions"**: API call failed, check your API key
- **"Invalid response format from AI"**: AI returned unexpected format
- **"OpenAI API error: 401"**: Invalid API key
- **"OpenAI API error: 429"**: Rate limit exceeded

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔒 Security Notes

- Never commit your API key to version control
- Use environment variables for sensitive data
- The API key is only used client-side for this demo
- In production, implement server-side API calls

## 🎨 Customization

### Styling
- Edit `src/index.css` for global styles
- Component-specific styles are inline for simplicity
- Uses modern CSS with gradients and animations

### Adding Features
- New question types: Modify the AI prompts
- Additional topics: Update the topics list
- Custom feedback: Adjust the feedback generation prompts
- UI improvements: Edit component files

## 📊 Performance

- **Mock Mode**: Instant responses
- **API Mode**: 1-3 seconds per request
- **Caching**: None implemented (add if needed)
- **Bundle Size**: ~2MB (includes React)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set environment variables in deployment settings
3. Deploy automatically on push

### Environment Variables for Production
```
REACT_APP_OPENAI_API_KEY=your-production-api-key
```

---

**Need help?** Check the console for detailed error messages and ensure your API key is properly configured.
