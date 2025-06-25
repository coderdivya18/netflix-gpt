# Netflix GPT

- Create Vite Project
- Install tailwind and configure vite.config
- Common Header
- Routing Setup
- Login Form
- SignUp Form
- Form validation
- useRef hook
- Firebase Setup & Deployment for Vite Project
    - Create a Firebase Project
    - Go to console.firebase.google.com → Click “Add Project” → Follow the prompts
    - Enable Firebase Authentication (if needed)
    - Go to Authentication → Click Get Started → Enable "Email/Password" or other providers
    - Install Firebase CLI (if not installed) [npm install -g firebase-tools]
    - Log in to Firebase [firebase login]
    - Go to your Vite project directory [cd path/to/your/project]
    - Build your project [npm run build]
    - Initialize Firebase in the project [firebase init]
    - During prompts: 
          - Select: Hosting, 
          - Choose: Use existing project → Pick your Firebase ,
          - Public directory: dist, 
          - Configure as SPA: Yes
          - Overwrite index.html: No
    - Deploy your app [firebase deploy]
    - (Optional) Preview Locally: Run Firebase local server [firebase serve] Visit http://localhost:5000
    - Redeploy After Future Changes: After changes: [npm run build][ firebase deploy]






# Features
- Login/signup Page
    - Signup/signIn form
    - Redirect to Browse Page
- Browse Page (comes after authentication)
    - Header
    - Main Movie 
      - Background Trailer
      - Title & description
      - Buttons
      - Movie Suggestion by category, genres
        - Movies List * n (horizontally scrollable)
- Netflix GPT 
   - Search Bar
   - Movie suggestions