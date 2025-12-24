FilmVault 🎬

FilmVault is a dynamic movie discovery web application built with React and Vite. It allows users to browse popular releases, search for specific titles using real-time API data, and curate a personal list of favorite movies.

This project was developed as a frontend portfolio initiative to explore modern React patterns, state management, and API integration. It aims to replicate the core browsing experience of platforms like IMDb or Netflix in a lightweight, responsive interface.

🚀 Key Features

🎬 Real-time Movie Search: Fetches movie data dynamically from The Movie Database (TMDB) API.

❤️ Favorites Collection: Users can bookmark movies to a "Favorites" list, which persists locally using browser localStorage.

📱 Responsive Design: A mobile-first, grid-based UI that adapts seamlessly to different screen sizes.

⚡ Optimized Performance: Built with Vite for lightning-fast hot reloading and build times.

UI/UX: Interactive hover states and immediate visual feedback for user actions.

🛠️ Tech Stack

Frontend Framework: React 19

Build Tool: Vite

Styling: CSS3 (Modular architecture)

State Management: React Context API (MovieContext)

Routing: React Router DOM

Data Source: The Movie Database (TMDB) API

🏗️ Project Architecture

This project follows a Single Page Application (SPA) architecture, prioritizing clarity and component reusability.

State Management: A global MovieContext manages the application state, specifically the "Favorites" list, making it accessible to any component in the tree without prop drilling.

Service Layer: API calls are abstracted into services/api.js, separating data fetching logic from UI components.

Component Structure:

App.jsx: Handles routing logic.

Home.jsx: Manages the search input and displays the main movie grid.

MovieCard.jsx: Reusable presentation component for individual movie items.

Favorites.jsx: Renders the user's stored collection.

📂 Folder Structure

FilmVault/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Navbar, MovieCard)
│   ├── contexts/        # React Context for global state
│   ├── css/             # Component-specific styles
│   ├── pages/           # Route views (Home, Favorites)
│   ├── services/        # API integration logic
│   ├── App.jsx          # Main routing component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration


💻 Installation & Setup

To run this project locally, ensure you have Node.js (v16+) installed.

Clone the repository

git clone [https://github.com/ShreyashV38/FilmVault.git](https://github.com/ShreyashV38/FilmVault.git)
cd FilmVault


Install dependencies

npm install


Start the development server

npm run dev


The app will be available at http://localhost:5173.

Build for production

npm run build


Note on API Keys: This project uses a demonstration API key from TMDB. In a production environment, this should be stored in a .env file (e.g., VITE_TMDB_API_KEY) and accessed via import.meta.env to prevent exposing credentials in the client-side code.

⚠️ Limitations

As a student project, there are currently a few known limitations:

Client-Side Only: Favorites are stored in localStorage, meaning they won't sync across different devices or browsers.

API Limits: Relying on the free tier of TMDB API may result in rate limiting during heavy usage.

Pagination: Currently displays only the first page of search results.

Error Handling: Basic network error logging is implemented, but user-facing error messages could be more robust.

🔮 Future Scope

There is significant room for extension, making this a great base for further learning:

Authentication: Integrate Firebase or Auth0 to allow users to create accounts and save favorites to a database.

Detailed Views: Create a dynamic /movie/:id route to show plot summaries, casting, and trailers.

Advanced Filtering: Add filters for Genre, Release Year, and Rating.

TypeScript Migration: Refactor the codebase to TypeScript for better type safety and maintainability.

Testing: Implement unit tests with Jest/Vitest and React Testing Library.

🤝 Contribution Guidelines

Contributions are welcome! If you're also learning React and want to improve this project:

Fork the repository.

Create a feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License

This project is licensed under the MIT License.

<p align="center">
<i>Made with 💻 and ☕ by a Computer Science Student.</i>
</p>
