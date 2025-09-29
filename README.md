Sample README – AI-Assisted Knowledge Quiz:

# AI-Assisted Knowledge Quiz

## 1. Project Setup & Demo
Web: Run `npm install && npm start` to launch locally.  
Mobile: Not applicable (web-only project).  
Demo: Provide a screen recording (for mobile) or hosted link (for web). The app runs locally at http://localhost:3000 (or next available port). No deployment required for demo; local testing via browser covers the full flow. For hosted demo, deploy to Vercel/Netlify: `npm run build` then upload the `build` folder.

## 2. Problem Understanding
Summarize your understanding of the problem and mention assumptions made. The task requires a React web app for an interactive quiz: users select a topic (e.g., Wellness, Tech Trends, Science, History, Geography, Literature, Mathematics, Art), AI generates 5 MCQs with options/explanations, show loading during generation, display questions one-by-one with navigation/progress bar, and provide AI feedback on results based on score. Prompts ensure JSON output; include error handling/retries; reusable QuestionComponent. Assumptions: Mock data fallback without OpenAI key; medium difficulty; educational questions with explanations; web-only (no mobile); theme-specific mocks for relevance.

## 3. AI Prompts & Iterations
Document your initial prompts, issues faced, and refined prompts for better results. Initial: Simple "Generate 5 MCQs on [topic]". Issues: Inconsistent JSON (extra text, wrong structure, parse errors). Refined: System prompt "You are an expert quiz generator. Always respond with valid JSON only." User prompt specifies exact structure: {success: true, topic, description, questions: [{id, question, options: [], correctAnswer: 0-3, explanation}]}. For feedback: {success: true, feedback: {score, total, percentage, message, suggestions: [], encouragement}}. Iterations: Added retry on parse fail; temperature 0.7 for consistency; max_tokens 800; validation for 5 questions. Mock simulates this with theme-specific data (e.g., math for Mathematics).

## 4. Architecture & Code Structure
- `App.js` or mobile `NavigationHost` manages navigation. App.js handles screen routing via state.  
- Separate components/screens for each step: TopicSelection.js (screen 1), LoadingScreen.js (screen 2), QuizScreen.js with QuestionComponent.js (screen 3, reusable for question/options/selection), ResultsScreen.js (screen 4).  
- `aiService.ts` / `AIClient.swift` / `AIRepository.kt` handles AI calls. openaiService.js: fetch to OpenAI, JSON parse/validate/retry, mock fallback.  
- Use React Context, SwiftUI ObservableObject, or Jetpack ViewModel for state management. QuizContext.js: useReducer for state (screens, topic, questions, answers, score), memoized actions to avoid re-renders.

## 5. Screenshots / Screen Recording
Attach screenshots (web) or screen recording (mobile) covering all screens.  
- Screen 1: Topic grid (8 cards with icons/descriptions); select navigates to loading.  
- Screen 2: Loader card with spinner, "AI generating [topic] questions...", "May take a few seconds".  
- Screen 3: Progress bar (1/5), QuestionComponent (question + radio options), Next/Prev buttons.  
- Screen 4: Score (e.g., 3/5), feedback message/suggestions/encouragement, restart.  
Local browser testing verifies; screenshots from dev tools or recording tool.

## 6. Known Issues / Improvements
List bugs or limitations and how you'd improve them with more time. Issues: Console OpenAI warnings (no key, uses mock); no session persistence; client-side key exposure. Improvements: Backend proxy for API; localStorage for progress; difficulty levels; more question types (T/F); ARIA accessibility; unit tests (Jest for service/context); PWA for offline.

## 7. Bonus Work
Mention any extra polish or features added (animations, dark mode, etc.). Theme-specific mock questions for all topics (e.g., history events, math equations). Fixed re-render loop in LoadingScreen (memoized context). CSS animations (loader spinner, transitions). Progress bar. Error toasts. Responsive grid/flex layout.
