import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddTask />} />
                <Route path="/edit/:id" element={<EditTask />} />
            </Routes>
        </Router>
    );
};

export default App;



