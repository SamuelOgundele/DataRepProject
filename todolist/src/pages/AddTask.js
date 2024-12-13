import React from 'react';
import TaskForm from '../components/TaskForm';

const AddTask = () => {
    return (
        <div className="container mt-4">
            <h2>Add a New Task</h2>
            <TaskForm />
        </div>
    );
};

export default AddTask;
