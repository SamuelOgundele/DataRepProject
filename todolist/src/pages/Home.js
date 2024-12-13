import React from 'react';
import TaskList from '../components/TaskList';

const Home = () => {
    return (
        <div className="container mt-4">
            <h1>Task Manager</h1>
            <TaskList />
        </div>
    );
};

export default Home;
