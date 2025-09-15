# Forty4-fullstack
User Management Dashboard

A full-stack web application to manage users with CRUD (Create, Read, Update, Delete) functionality. Built with Node.js, Express, SQLite (Backend) and React.js, Axios, React Router, Tailwind CSS (Frontend).

🚀 Features

Add, view, edit, and delete users

Client-side + server-side validation

RESTful API with Express.js

SQLite lightweight database

Responsive UI with Tailwind CSS

GitHub-friendly project structure

🛠️ Tech Stack
Backend

Node.js

Express.js

SQLite

Nodemon (dev dependency)

Frontend

React.js

React Router DOM

Axios

Tailwind CSS

📂 Project Structure
user-management-dashboard/
├── backend/
│   ├── database.js
│   ├── server.js
│   └── routes/
│       └── users.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/<your-username>/user-management-dashboard.git
cd user-management-dashboard

2️⃣ Backend Setup
cd backend
npm install


Start backend server:

npm run dev   # for development (nodemon)
npm start     # for production


👉 Runs on: http://localhost:8080

3️⃣ Frontend Setup
cd ../frontend
npm install


Start frontend app:

npm start


👉 Runs on: http://localhost:3000

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user

✅ GitHub repository link
https://github.com/Lokesh-Rella/Forty4-fullstack
public: https://forty4-fullstack-frontend.vercel.app/

