import React from 'react'

const Login = () => {
  return (
    <main className="auth-content">
      <form id="loginForm">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="john@wick.com" />
          <p id="message" className="text-center text-sm mt-3"></p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="**************" />
        </div>

        <button
          id="button"
          type="submit"
          className="w-full bg-blue-800 text-white cursor-pointer py-2 mt-4"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <a href="register.html" className="text-red-800">
            Register.
          </a>
        </p>
      </form>
    </main>
  )
}

export default Login