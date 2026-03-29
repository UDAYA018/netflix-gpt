# netflix-gpt

- React with Vite
- configured Tailwindcss
- configured Jest and RTL
- Header
- Routing of App
- Login form
- Sign up form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In User Api
- Created Redux store with userSlice
- useDispatch() to dispatch an action
- useNavigate() to navigate to different page
- Implemented Sign Out
- Update profile
- BugFix: Sign up user displayName and profile picture update
- BugGix: If the user is not logged in redirect /browse to login page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add Hardcoded values to the constants file.
- Register TMDB API & create an app and get access token
- Get data from the TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create MovieSlice
- Update Store with movie data
- Planning for MainContainer and SecondaryContainer
- Fetch Data for Trailer Video
- Embedded the youtube video and make it autoplay and mute
- Tailwind css to make it look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing using Tailwind css
- usePopularMovies custom hooks
- useUpComingMovies custom hooks
- useTopRated custom hooks

# Features

- Login / Sign Up
  - Sign in / Sign up form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title and description
    - Movie Suggestions
      - Movielists \* N
- Netflix GPT
  - Search Bar
  - Movie suggestions

# Firebase

- firebase login
- firebase init
  - npm i -g firebase-tools@8.15.0
- public directory -> dist when using vite. Use build when using CRA[create react app].
- configure as a single app -> N
- Automatic builds and deploys with GitHub -> N
- npm run build
- firebase deploy

# Redux Toolkit

- npm i -D @reduxjs/toolkit
- npm i react-redux
- create a appStore using configureStore[@reduxjs/toolkit]
- create a Userslice using createSlice[@reduxjs/toolkit]
- export the userReducer and use in the appStore
- provide my store to my app using Provdier[react-redux] in the root of the app.
- dispatch an action using useDispatch[react-redux]
- to get the photoURL from the store, do useSelector(store => store.user)
