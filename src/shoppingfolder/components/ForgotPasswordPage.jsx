// src/pages/ForgotPasswordPage.jsx

import React from 'react';

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page">
      <h2>Reset Your Password</h2>
      <p>Please enter your email address to receive a password reset link.</p>
      <form>
        <input type="email" placeholder="you@example.com" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
