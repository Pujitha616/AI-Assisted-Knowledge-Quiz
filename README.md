# AI Assisted Knowledge Quiz

*An interactive AI-powered learning experience.*

---

## 1. Project Setup & Demo

### Web

* Run `npm install && npm start` to launch locally.
* App will be available at: **[http://localhost:3000](http://localhost:3000)**

### Deployment

* For a hosted demo, build the app and deploy:

  ```bash
  npm run build
  ```
* Deploy the **`build/`** folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

---

## 2. Problem Understanding

The project is a **web-based AI-assisted quiz application** that generates engaging and educational multiple-choice questions.

### Features

* Topic selection (Wellness, Tech Trends, Science, History, Geography, Literature, Mathematics, Art).
* AI generates **5 MCQs** with options and explanations.
* Loading screen while AI prepares questions.
* Quiz flow with **progress bar** and **navigation controls**.
* Results screen with **AI-generated feedback** and suggestions.

### Assumptions

* Mock data is used if no OpenAI API key is provided.
* Questions default to medium difficulty.
* Web-only interface (no mobile app).
* Educational content is prioritized with explanations.

---

## 3. AI Prompts & Iterations

* **Initial prompt**: Generate 5 MCQs for the chosen topic.
* **Challenges**: Inconsistent JSON, parsing errors.
* **Solutions**:

  * Refined system prompt enforcing strict JSON format.
  * Added retry logic and error handling.
  * Introduced mock fallback for development/testing.
  * Adjusted temperature settings for stable results.

---

## 4. Architecture & Code Structure

* **App.js** → Manages navigation with React state.
* **Screens**:

  * `TopicSelectionScreen`
  * `LoadingScreen`
  * `QuizScreen` (with reusable `QuestionComponent`)
  * `ResultsScreen`
* **Services**:

  * `openaiService.js` → Handles API calls, JSON parsing, mock fallback.
* **State Management**:

  * `QuizContext.js` using React Context + `useReducer`.

---

## 5. Screenshots / Demo Preview

* **Topic Selection** → Grid of 8 cards.
* **Loading Screen** → Spinner with AI generation message.
* **Quiz Screen** → Question display, progress bar, navigation.
* **Results Screen** → Final score, personalized feedback, restart option.

(Screenshots or a short demo video can be attached here.)

---

## 6. Known Issues & Future Improvements

### Current Issues

* Console warnings when API key is missing (mock fallback used).
* No persistence (session lost on refresh).
* Client-side API key exposure.

### Future Enhancements

* Backend proxy for secure API handling.
* LocalStorage or IndexedDB for quiz persistence.
* Difficulty level selection.
* Additional question formats (e.g., True/False).
* Accessibility improvements.
* Unit testing and CI integration.
* PWA support for offline usage.

---

## 7. Bonus Enhancements

* Predefined **theme-specific mock questions**.
* Smooth **CSS animations** (loading spinner, transitions).
* Enhanced **progress bar** with percentage.
* Error handling via **toasts/alerts**.
* Fully responsive design (grid/flex layouts).
* Fixed re-render loops with memoization.
* **Dark/Light Mode toggle** for a customizable user experience.

---

✨ This project combines **AI-driven content generation**, **modern React architecture**, and **polished UI design** to deliver an engaging and professional interactive quiz experience.
