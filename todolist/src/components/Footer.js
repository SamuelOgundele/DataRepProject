import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                {/* Quick Links */}
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About</h5>
                        <p>
                            This is a MERN To-Do application that helps you organize your tasks and improve productivity.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="/" className="text-dark">Home</a></li>
                            <li><a href="/add" className="text-dark">Add Task</a></li>
                            <li><a href="/privacy" className="text-dark">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <p>Email: g00403503@atu.ie</p>
                        <p>Phone: +1 111 111 111</p>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark text-white">
                © 2024 Task Manager. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
