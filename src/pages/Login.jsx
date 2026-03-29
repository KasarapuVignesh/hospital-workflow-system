import React, { useState } from 'react';
import supabase from '../config/supabase';
import '../styles/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                setError(signInError.message);
            } else {
                setMessage('Login successful!');
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1000);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Hospital Workflow System</h1>
                <h2 className="auth-subtitle">Staff Login</h2>
                {error && <div className="error-message">{error}</div>}
                {message && <div className="success-message">{message}</div>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" disabled={loading} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" disabled={loading} />
                    </div>
                    <button type="submit" className="login-btn" disabled={loading}> {loading ? 'Logging in...' : 'Login'} </button>
                </form>
            </div>
        </div>
    );
};

export default Login;