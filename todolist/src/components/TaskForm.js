import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
    const [task, setTask] = useState({ title: '', description: '', dueDate: '', priority: 'Low' });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Get task ID from the URL

    // Fetch task details if editing
    useEffect(() => {
        if (id) {
            setIsEditing(true);
            axios.get(`http://localhost:4000/tasks/${id}`)
                .then(response => setTask(response.data))
                .catch(error => console.error('Error fetching task:', error));
        }
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    // Handle form submission for adding or updating tasks
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing ? `http://localhost:4000/tasks/${id}` : 'http://localhost:4000/tasks';
        const method = isEditing ? 'put' : 'post';
        axios[method](url, task)
            .then(() => {
                alert(isEditing ? 'Task updated successfully!' : 'Task added successfully!');
                navigate('/');
            })
            .catch(error => console.error('Error submitting task:', error));
    };

    return (
        <div className="container mt-4">
            <h2>{isEditing ? 'Edit Task' : 'Add Task'}</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        className="form-control"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority:</label>
                    <select
                        id="priority"
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary me-2">
                    {isEditing ? 'Update Task' : 'Add Task'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default TaskForm;


