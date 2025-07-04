## 🩺 Health Journal App

A full-stack **MERN** application that helps users track daily health habits including mood, sleep, symptoms, and exercise. Visualizes stats and stores journal history securely using JWT-based authentication.



### 🛠 Tech Stack

* **Frontend**: React, Tailwind CSS, React Router, Axios, Chart.js
* **Backend**: Node.js, Express, MongoDB, Mongoose
* **Authentication**: JWT (JSON Web Token)
* **Deployment**: Vercel (Frontend), Render/Railway (Backend)



### 📸 Features

* ✅ User registration & login (JWT auth)
* 📖 Create & save daily health journal entries
* 🕒 View and edit health history
* 📊 Stats with sleep & mood graphs (Chart.js)
* 🧠 Tracks: mood, sleep hours, symptoms, notes, and exercise
* 🎨 Tailwind CSS responsive UI
* 🔒 Protected routes for dashboard and journal pages



### 📂 Folder Structure


project-root/
├── server/           # Backend (Node.js + Express + MongoDB)
├── client/           # Frontend (React + Tailwind CSS)


### 🚀 Live Demo

Frontend:
Backend: 

### ⚙️ How to Run Locally

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/health-journal-app.git
cd health-journal-app
```

#### 2. Setup Backend (server)

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

Start backend:

```bash
npm start
```

#### 3. Setup Frontend (client)

```bash
cd ../client
npm install
```

Create a `.env` file in `client/`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm start
```

---

### 📦 Deploying

#### 🟦 Frontend (Vercel)

1. Push `client/` folder to GitHub.
2. Import GitHub repo into [Vercel](https://vercel.com).
3. Set environment variable:

   ```
   REACT_APP_API_URL = https://your-backend.onrender.com/api
   ```

#### 🟪 Backend (Render or Railway)

1. Push `server/` folder to GitHub.
2. Import repo into [Render](https://render.com) or [Railway](https://railway.app).
3. Set environment variables:

   ```
   MONGO_URI
   JWT_SECRET
   ```


### 🤝 Author

**Sabarni Guha**
Built during a MERN Stack Bootcamp — July 2025



### 📜 License

This project is open source and free to use.
