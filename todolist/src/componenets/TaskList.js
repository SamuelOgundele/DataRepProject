import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get('http://localhost:4000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    };

    const handleSearch = () => {
        axios.get(`http://localhost:4000/tasks?search=${searchQuery}&priority=${filter}`)
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/tasks/${id}`)
            .then(() => fetchTasks())
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h1>Task List</h1>
            <div className="mb-3">
                <input type="text" placeholder="Search tasks..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-control mb-2" />
                <select onChange={(e) => setFilter(e.target.value)} className="form-select mb-2">
                    <option value="">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>
            <div className="row">
                {tasks.map(task => (
                    <div className="col-md-4 mb-3" key={task._id}>
                        <div className={`card border-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}`}>
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                <p className="text-muted">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                                <p className={`text-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}`}>Priority: {task.priority}</p>
                                <button onClick={() => navigate(`/edit/${task._id}`)} className="btn btn-primary me-2">Edit</button>
                                <button onClick={() => handleDelete(task._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
