# MERN To-Do App

## Overview
The MERN To-Do App is a task management application designed to help users organize and prioritize tasks. It is built using the **MERN stack**:
- **MongoDB**: Database for storing tasks.
- **Express.js**: Backend framework for API routes.
- **React**: Frontend library for user interface.
- **Node.js**: Runtime environment for the server.

---

## Features
- Add tasks with title, description, due date, and priority.
- Edit existing tasks.
- Delete tasks.
- Search and filter tasks by priority.
- Responsive design using **Bootstrap**.

---

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud setup)
- [Git](https://git-scm.com/)

---

## Installation Guide
Follow these steps to set up and run the project.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app
2. Set Up the Backend
Navigate to the backend folder and install dependencies:

bash
Copy code
cd backend
npm install
Install Backend Dependencies:
Command	Purpose
npm install express	Installs Express.js, a web application framework.
npm install mongoose	Installs Mongoose for MongoDB interactions.
npm install dotenv	Manages environment variables.
npm install cors	Enables Cross-Origin Resource Sharing.
npm install body-parser	Parses incoming request bodies.
3. Set Up the Frontend
Navigate to the frontend folder and install dependencies:

bash
Copy code
cd ../frontend
npm install
Install Frontend Dependencies:
Command	Purpose
npm install react-router-dom	Adds routing capabilities to React.
npm install axios	Allows HTTP requests to the backend.
npm install bootstrap	Adds responsive and styled components.
4. Configure MongoDB
Create a free MongoDB cluster on MongoDB Atlas.
Add your MongoDB URI to the backend/.env file:
env
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todolist?retryWrites=true&w=majority
5. Run the Application
Start the backend and frontend servers:

Run the Backend:
bash
Copy code
cd backend
npm run dev
Runs the backend server on http://localhost:4000.
Run the Frontend:
bash
Copy code
cd ../frontend
npm start
Runs the frontend on http://localhost:3000.
Usage
Add a Task
Click the "Add Task" button in the navbar.
Fill in the task details (title, description, due date, and priority).
Click "Add Task" to save.
Edit a Task
On the task list, click "Edit" next to a task.
Update the task details and click "Update Task."
Delete a Task
On the task list, click "Delete" next to a task.
Confirm deletion when prompted.
Search and Filter
Use the search bar to find tasks by title.
Use the filter dropdown to filter tasks by priority (Low, Medium, High).
Project Structure
The application is organized as follows:

bash
Copy code
mern-todo-app/
│
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Backend entry point
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Pages like Home, AddTask, EditTask
│   │   ├── styles.css   # Custom styles
│   │   └── App.js       # Frontend entry point
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│
└── README.md            # Documentation
API Documentation
Base URL
http://localhost:4000

Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
GET	/tasks/:id	Fetch task by ID
POST	/tasks	Add a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
Technologies Used
Frontend: React, React Router, Axios, Bootstrap
Backend: Node.js, Express.js, MongoDB, Mongoose
Styling: Bootstrap, Custom CSS
License
This project is licensed under the MIT License. See the LICENSE file for details.

yaml
Copy code

---

### **How to Use It**
1. Copy the above content into a `README.md` file in the root of your project.
2. Customize the repository URL in the "Clone the Repository" step.
3. Add any additional details unique to your project.
