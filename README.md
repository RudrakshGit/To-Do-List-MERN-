# **Todo List Application** 📝

## **Description**

A **full-stack Todo List** application built using **React.js (frontend)** and **Node.js + Express.js (backend)**, with **MongoDB** for persistent storage. The application allows users to manage tasks efficiently through a user-friendly interface.

## **Features**

✅ Add new tasks  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Persistent storage with **MongoDB**  
✅ Responsive UI built with **React.js + Bootstrap**  
✅ RESTful API for seamless backend integration  
✅ Authentication support

---

## **Installation & Setup**

### **1. Clone the repository**

```sh
git clone <your-repo-url>
cd Todo_List
```

### **2. Setup Backend (Server)**

```sh
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/todo_db
JWT_SECRET=your_secret_key
```

Start the backend:

```sh
npm start
```

---

### **3. Setup Frontend (Client)**

```sh
cd ../client
npm install
```

Start the React frontend:

```sh
npm start
```

The frontend will run at `http://localhost:3000`.

---

## **Technologies Used**

### **Frontend:**

- **React.js (`^19.0.0`)** – Component-based UI library
- **React Router (`^7.1.3`)** – For page navigation
- **Axios (`^1.7.9`)** – For API calls to the backend
- **Bootstrap (`^5.3.3`)** – For responsive styling
- **Styled Components (`^6.1.14`)** – CSS-in-JS styling
- **React Icons (`^5.4.0`)** – Icon support

### **Backend:**

- **Node.js + Express.js** – API backend
- **MongoDB (Mongoose ODM)** – Database
- **JWT Authentication** – Secure user authentication
- **dotenv** – Environment variable management

---

## **Folder Structure**

```
Todo_List/
│── client/                # Frontend files (React.js)
│   ├── src/               # React components
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   ├── .env               # Environment variables
│── server/                # Backend files (Node.js)
│   ├── controllers/       # Business logic for API
│   ├── models/            # Database models (MongoDB)
│   ├── routes/            # API routes
│   ├── middleware/        # Authentication & validation
│   ├── config/            # Database connection
│   ├── server.js          # Main entry point
│── node_modules/          # Dependencies (ignored in git)
│── package.json           # Project dependencies
│── README.md              # Project documentation
```

---

## **API Endpoints**

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| POST   | `/tasks`     | Add a new task      |
| PUT    | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository, create issues, or submit pull requests. 🚀

---

## **License**

This project is licensed under the **MIT License**.

```

```
