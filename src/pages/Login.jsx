import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!isLogin) {
      if (!form.name || !form.email || !form.password || !form.confirmPassword) {
        setError('All fields are required.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      // Simulate account creation
      alert('Account created! Please login.');
      setIsLogin(true);
      setForm({ name: '', email: '', password: '', confirmPassword: '' });
      return;
    }
    if (!form.email || !form.password) {
      setError('Email and password are required.');
      return;
    }
    // Simulate login
    alert('Login successful!');
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/assest/image/farm-man-working-his-organic-lettuce-garden.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-green-900/40 z-0" />
      <div className="relative z-10 bg-white/90 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
          onClick={() => navigate("/")}
          aria-label="Close login form"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          {isLogin ? 'Customer Login' : 'Create Account'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}
          {error && <div className="text-red-500 mb-3 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <div className="mt-4 text-center">
          {isLogin ? (
            <>
              <span>New customer? </span>
              <button
                className="text-green-700 hover:underline font-medium"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <button
                className="text-green-700 hover:underline font-medium"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
