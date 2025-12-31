# Full Stack CRUD Application with Authentication

This project is a complete full-stack web application featuring user authentication and CRUD (Create, Read, Update, Delete) operations. It demonstrates real-world frontend and backend integration with secure authentication and protected APIs.

---

## Features

- User Registration and Login
- JWT-based Authentication & Authorization
- Protected Routes
- Create, Read, Update, Delete (CRUD) operations
- Secure REST APIs
- Responsive Frontend UI
- Proper Error Handling and Validation

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

## Project Structure

```
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── App.jsx
│
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
│
└── README.md
```

---

## Installation & Setup

### Backend Setup
```bash
cd backend
npm install
npm start
```

Create a `.env` file inside the backend folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## Authentication Flow

- User registers or logs in
- JWT token is generated on successful login
- Token is sent with each API request
- Protected routes are accessible only to authenticated users

---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/items | Get all items |
| POST | /api/items | Create item |
| PUT | /api/items/:id | Update item |
| DELETE | /api/items/:id | Delete item |

---

## Notes

- `node_modules` and `.env` files are excluded for security
- Clean and modular code structure
- Suitable for frontend and full-stack internship roles
- Demonstrates real-world CRUD and authentication workflow

---

## Author

Dhyanvi Raghuvanshi







