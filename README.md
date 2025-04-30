# 💬 LeetChat

LeetChat is a full-stack real-time chat application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) with modern styling and essential features like authentication, WebSockets, file uploads, and more.

## 🚀 Features

- 🔐 **Authentication** with JWT (Login & Register)
- 📡 **Real-time chat** using WebSockets
- 💾 **Message storage** in MongoDB
- 🟢 **Online status** indicators
- 📁 **File uploads**
- 🍪 **Cookie-based token storage**
- 🌐 **CORS** properly handled
- ⚡ Built with **Vite.js**, styled using **Tailwind CSS**

---

## 🛠 Tech Stack

| Client | Server | Database | Realtime |
|--------|--------|----------|----------|
| React + Vite.js | Node.js + Express.js | MongoDB (with Mongoose) | WebSockets |

---

## 🔧 Installation & Setup

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/LeetChat.git
cd LeetChat
```
### 🧩 Backend Setup
```bash
cd Backend
npm install
```
#### Create a .env file in the /server directory:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
node index.js
```
### 💻 Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## 🧪 Future Improvements
- Group chats
- Message read receipts
- User typing indicators
- Voice/video calling (WebRTC)
- Notifications and dark mode
