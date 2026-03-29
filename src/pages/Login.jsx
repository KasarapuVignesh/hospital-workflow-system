import React from 'react';

const Login = () => {
    const handleLogin = () => {
        // Handle login logic here
    };
    
    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;