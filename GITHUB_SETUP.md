# GitHub Repository Setup

## 🚀 Quick GitHub Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: AI-Assisted Knowledge Quiz with real-time correction"
```

### 2. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `ai-assisted-knowledge-quiz`
4. Description: `AI-powered quiz application with real-time answer correction and chatbot`
5. Make it public
6. Don't initialize with README (we already have one)

### 3. Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-assisted-knowledge-quiz.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

### 5. Set Environment Variables
1. In Netlify dashboard → Site settings
2. Environment variables
3. Add: `REACT_APP_OPENAI_API_KEY` = `your-api-key-here`

## 📁 Repository Structure
```
ai-assisted-knowledge-quiz/
├── public/
│   ├── index.html
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── TopicSelectionScreen.js
│   │   ├── LoadingScreen.js
│   │   ├── QuizScreen.js
│   │   ├── ResultsScreen.js
│   │   ├── ChatbotInterface.js
│   │   ├── AnswerReview.js
│   │   └── HintSystem.js
│   ├── context/
│   │   └── QuizContext.js
│   ├── services/
│   │   ├── aiService.js
│   │   └── openaiService.js
│   ├── config/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── netlify.toml
├── README.md
├── SETUP.md
├── DEPLOYMENT.md
└── GITHUB_SETUP.md
```

## 🔄 Continuous Deployment

Once connected to Netlify:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- Environment variables persist across deployments

## 🎯 Live Demo URLs

After deployment, your app will be available at:
- **Netlify**: `https://your-app-name.netlify.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

## 📊 Features in Production

✅ **Real-time Answer Correction**
✅ **AI-Powered Question Generation**
✅ **Conversational Chatbot**
✅ **Progressive Hint System**
✅ **Answer Review System**
✅ **Responsive Design**
✅ **Error Handling**
✅ **Mock Data Fallback**

## 🔧 Customization

### Adding New Topics
Edit `src/services/openaiService.js`:
```javascript
export const getAvailableTopics = () => {
  return [
    // Add new topics here
    { id: 'NewTopic', name: 'New Topic', description: 'Description' }
  ];
};
```

### Styling
- Global styles: `src/index.css`
- Component styles: Inline styles in components

### API Configuration
- Edit `src/config/api.js` for API settings
- Set environment variables in hosting platform

---

**Ready to deploy?** Follow the steps above to get your AI quiz app live! 🚀
