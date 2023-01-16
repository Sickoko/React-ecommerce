import React from "react";
export default function Signup() {
  return (
    <div className="container">
      <h1 className="signup">Sign up</h1>
      <form action="">
        <div className="mb-3">
          <label htmlFor="name" className="label">
            Name*
          </label>
          <br />
          <input
            type="text"
            name="Enteryourname"
            placeholder="Enter your name"
            className="input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="label">
            Email*
          </label>
          <br />
          <input
            type="email"
            name="Enteryouremail"
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="labels">
            Password*
          </label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Create a password"
          />
          <br />
          <p className="warning mt-1">Must be at least 8 characters</p>
        </div>

        <button className="purple-btn">Create account</button>
        <div>
            <p className="acc">Already have an account? <a href="" className="login-btn">Log in</a></p>
        </div>
      </form>
    </div>
  );
}
