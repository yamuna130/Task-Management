# ✅ Task Management System

A full-stack task management application with user authentication, task CRUD functionality, and real-time UI updates. Built using the MERN stack (MongoDB, Express, React, Node.js).

---

## 🚀 Features

- 🔐 User Registration & Login (JWT-based)
- 📝 Create, Edit, Delete, and Complete Tasks
- 📦 MongoDB for persistent task storage
- 🌗 Light/Dark Theme Toggle
- 🔄 Real-time updates and responsive UI
- 🔒 Protected routes for authenticated users only

---

## 🧱 Tech Stack

### Frontend
- React
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- dotenv & CORS

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
2. Environment Variables
Create a .env file in both client/ and server/ directories.

📁 client/.env

REACT_APP_API_BASE_URL=http://localhost:5000/api

📁 server/.env

PORT=5000
MONGO_URI=mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority
MONGO_USER=yourMongoDBUser
MONGO_PASS=yourMongoDBPassword
CLIENT_URL=http://localhost:3000
JWT_SECRET=yourSecretKey

3. Install Dependencies
Server:

cd server
npm install

Client:
cd client
npm install

📦 Running the Application
Start Backend

cd server
npm run dev

Start Frontend
cd client
npm start

Visit: http://localhost:3000

📂 Folder Structure

task-management-app/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Tasks.js
│   │   ├── components/
│   │   │   └── ThemeToggle.js
│   │   └── App.js
│   └── .env
├── server/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── .env
