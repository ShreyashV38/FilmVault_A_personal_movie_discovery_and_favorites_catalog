# FilmVault 🎬

**FilmVault** is a dynamic movie discovery web application built with **React** and **Vite**. It allows users to browse popular releases, search for specific titles using real-time API data, and curate a personal list of favorite movies.Try it out{https://film-vault-a-personal-movie-discove.vercel.app/}

This project was developed as a frontend portfolio initiative to explore modern React patterns, state management, and API integration. It aims to replicate the core browsing experience of platforms like IMDb or Netflix in a lightweight, responsive interface.

## 🚀 Key Features

* **🎬 Real-time Movie Search:** Fetches movie data dynamically from The Movie Database (TMDB) API.
* **❤️ Favorites Collection:** Users can bookmark movies to a "Favorites" list, which persists locally using browser `localStorage`.
* **📱 Responsive Design:** A mobile-first, grid-based UI that adapts seamlessly to different screen sizes.
* **⚡ Optimized Performance:** Built with Vite for lightning-fast hot reloading and build times.
* **✨ UI/UX:** Interactive hover states and immediate visual feedback for user actions.

## 🛠️ Tech Stack

* **Frontend Framework:** React 19
* **Build Tool:** Vite
* **Styling:** CSS3 (Modular architecture)
* **State Management:** React Context API (`MovieContext`)
* **Routing:** React Router DOM
* **Data Source:** The Movie Database (TMDB) API

## 🏗️ Project Architecture

This project follows a **Single Page Application (SPA)** architecture, prioritizing clarity and component reusability.

* **State Management:** A global `MovieContext` manages the application state, specifically the "Favorites" list, making it accessible to any component in the tree without prop drilling.
* **Service Layer:** API calls are abstracted into `services/api.js`, separating data fetching logic from UI components.
* **Component Structure:**
    * `App.jsx`: Handles routing logic.
    * `Home.jsx`: Manages the search input and displays the main movie grid.
    * `MovieCard.jsx`: Reusable presentation component for individual movie items.
    * `Favorites.jsx`: Renders the user's stored collection.

## 📂 Folder Structure

```text
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

```
---

## Installation & Setup

### Prerequisites

* Node.js (v16 or higher)
* npm

### Steps

```bash
# Clone the repository
git clone https://github.com/ShreyashV38/FilmVault.git

# Navigate to the project directory
cd FilmVault

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### API Key Note

This project currently uses a demonstration TMDB API key. For production usage, store the key in a `.env` file:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Access it using `import.meta.env` to avoid exposing credentials.

---

## Limitations

* Client-side only; favorites are stored in `localStorage`
* No cross-device or account-based synchronization
* TMDB free-tier API rate limits apply
* Only the first page of search results is displayed
* Basic error handling; user-facing messages are minimal

---

## Future Scope / Improvements

* User authentication with Firebase or Auth0
* Backend integration for persistent favorites storage
* Detailed movie pages (`/movie/:id`) with cast, trailers, and plot
* Advanced filtering (genre, year, rating)
* TypeScript migration for improved maintainability
* Unit and integration testing using Vitest/Jest and React Testing Library

---

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add YourFeatureName'`)
4. Push to your branch (`git push origin feature/YourFeatureName`)
5. Open a Pull Request with a clear description

Keep changes focused, readable, and aligned with the existing structure.

---

## License

This project is licensed under the **MIT License**.

---

<p align="center">
<i>Built as a frontend learning project using modern React tooling.</i>
</p>
