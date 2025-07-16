import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignIn ? 'Sign In form submitted!' : 'Sign Up form submitted!');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isSignIn ? 'Welcome Back!' : 'Join Us Today!'}</h2>
          <p>{isSignIn ? 'Sign in to continue your shopping adventure.' : 'Create an account and start exploring amazing deals.'}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Password*</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="password-toggle-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {!isSignIn && (
            <div className="form-group password-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="••••••••"
                  required
                />
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="password-toggle-icon">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          )}

          <button type="submit" className="auth-button">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isSignIn ? "Don't have an account?" : 'Already have an account?'}
            <span className="toggle-link" onClick={toggleForm}>
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </span>
          </p>

          {isSignIn && (
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
