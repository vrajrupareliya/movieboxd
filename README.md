#  Movieboxd - Movie Review & Social Networking Platform

A full-stack movie review and social networking web application inspired by **Letterboxd**, built using the **MERN stack**.  
This platform allows users to explore movies, write reviews, maintain personal watchlists and diaries, and interact socially through following other users and activity feeds.

---

##  Features

###  Authentication & User Management
- User registration and login
- Secure **JWT-based authentication**
- **bcrypt** password hashing
- Profile creation, update, and management

---

###  Movie & Review System
- Create, read, update, and delete movies (internal database)
- Write, edit, and delete movie reviews
- Star-based rating system (0-5 stars)
- Personal **film diary** for logged movies
- Search movies by title

---

###  Social Networking Features
- Follow / Unfollow other users
- Follower & Following counts
- Personalized **activity feed** showing reviews from followed users
- Personal **watchlist** for future viewing

---

##  Tech Stack

| Technology | Purpose |
|----------|--------|
| **Node.js** | Backend runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | Schema modeling |
| **React.js** | Frontend UI |
| **JavaScript (ES6)** | Core language |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **HTML & CSS** | UI structure & styling |
| **Git & GitHub** | Version control |

---

##  Project Architecture
```
letterboxd-clone/
│
├── backend/
│   │   ├── models/        
│   │   ├── routes/        
│   │   ├── controllers/  
│   │   ├── middleware/
│   │   ├── src/   
│   │   └── utils/          
│   │
│   ├── server.js
│   ├── app.js         
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/   
│   │   ├── pages/        
│   │   ├── context/      
│   │   ├── services/     
│   │   ├── App.css
│   │   ├── index.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

## API Highlights
```
 Authentication & User APIs

POST /api/v1/users/login – User login and JWT token generation

POST /api/v1/users/logout – Logout user (JWT-protected)
```

User Profile APIs
```
GET /api/v1/users/:userId – Fetch public user profile

GET /api/v1/users/:userId/reviews – Fetch all reviews written by a specific user

Logged-in User (Protected)

GET /api/v1/users/me/profile – Fetch logged-in user’s profile

PUT /api/v1/users/me/update – Update logged-in user’s profile
```
Watchlist, Feed & Diary APIs
```
GET /api/v1/users/me/watchlist – Get user’s watchlist

POST /api/v1/users/me/watchlist/:movieId – Add movie to watchlist

DELETE /api/v1/users/me/watchlist/:movieId – Remove movie from watchlist

GET /api/v1/users/me/feed – Get personalized activity feed

GET /api/v1/users/me/diary – Fetch user’s personal movie diary
```
Social (Follow System) APIs
```
POST /api/v1/users/:userIdToFollow/follow – Follow a user

DELETE /api/v1/users/:userIdToUnfollow/unfollow – Unfollow a user

GET /api/v1/users/:userId/followers – Get user’s followers (public)

GET /api/v1/users/:userId/following – Get users followed by a user (public)
```
Movie APIs
```
GET /api/v1/movies/search?query=keyword – Search movies by title

GET /api/v1/movies/popular – Fetch popular movies

GET /api/v1/movies/:id – Fetch movie details by ID
```
Review APIs
```
GET /api/v1/reviews/:movieId/reviews – Get all reviews for a movie (supports pagination)

POST /api/v1/reviews/:movieId/addReview – Add a review for a movie (JWT-protected)

Single Review Management

GET /api/v1/reviews/:id/getReview – Fetch a single review

PUT /api/v1/reviews/:id/updateReview – Update a review (JWT-protected)

DELETE /api/v1/reviews/:id/deleteReview – Delete a review (JWT-protected)
```
