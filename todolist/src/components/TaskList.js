import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import custom CSS

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get('http://localhost:4000/tasks')
            .then((response) => setTasks(response.data))
            .catch((error) => console.error('Error fetching tasks:', error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/tasks/${id}`)
            .then(() => fetchTasks())
            .catch((error) => console.error('Error deleting task:', error));
    };

    const getCardClass = (priority) => {
        switch (priority) {
            case 'High':
                return 'card-high';
            case 'Medium':
                return 'card-medium';
            case 'Low':
            default:
                return 'card-low';
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="page-header">Task List</h1>
            <div className="row">
                {tasks.map((task) => (
                    <div className="col-md-4 mb-3" key={task._id}>
                        <div className={`card ${getCardClass(task.priority)}`}>
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                {task.dueDate && (
                                    <p className="text-muted">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                                )}
                                <p className={`text-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}`}>
                                    Priority: {task.priority}
                                </p>
                                <button
                                    onClick={() => navigate(`/edit/${task._id}`)}
                                    className="btn btn-primary me-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;


