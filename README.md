

### Real-Time Chat Application

This is a simple real-time chat app built using **WebSockets** for the backend and **React.js** for the frontend. Users can send and receive messages instantly with a clean and responsive interface.

---

## 🚀 Features

- 🔁 Real-time two-way chat
- 📄 Message history (per session)
- 📱 Responsive design (desktop + mobile)
- ⚙️ WebSocket server with Node.js
- 💻 React-based frontend

---

## 📁 Folder Structure

```
task-2-chat-app/
├── backend/
│   ├── server.js
│   └── README.md
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Backend (Node.js WebSocket)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install express ws
   ```

3. Start the WebSocket server:
   ```bash
   node server.js
   ```

4. The server runs on `http://localhost:3001`.

---

### 🧑‍💻 Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Create a React app (if not already initialized):
   ```bash
   npx create-react-app .
   ```

3. Replace the contents of:
   - `public/index.html`
   - `src/App.js`
   - `src/App.css`
   - `src/index.js`

   with the files provided in this repo.

4. Start the React app:
   ```bash
   npm start
   ```

5. Access the frontend on `http://localhost:3000`.

---

## 🔗 How It Works

- When a user types a message and hits "Send", the message is sent to the WebSocket server.
- The server broadcasts the message to all connected clients in real-time.
- Messages are updated live without needing to refresh the page.

---

## 🌐 Deployment Tips

- You can deploy the frontend using GitHub Pages, Vercel, or Netlify.
- Host the backend WebSocket server on a service like Heroku, Render, or your own VPS.
- Make sure the frontend WebSocket URL (`ws://localhost:3001`) is updated to your live server's WebSocket URL.

---

## 🛠 Technologies Used

- Frontend: React.js, HTML, CSS
- Backend: Node.js, Express, WebSocket (`ws` library)

---

## 📷 Screenshots

> 📌 Add your output screenshot here for GitHub preview

---
