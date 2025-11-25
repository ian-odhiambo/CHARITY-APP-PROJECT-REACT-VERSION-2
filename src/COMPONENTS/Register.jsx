import React from 'react'

const Register = () => {
  return (
    <main className="auth-content">
      <form id="register-form">
        {/* <!-- Single message area for all form errors --> */}
        <p id="message" className="text-center text-sm mt-3 mb-4"></p>

        <div className="grouped">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder="John" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" placeholder="Wick" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="johnwick" />
        </div>

        <div className="grouped">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="john@wick.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" placeholder="+254712345678" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender">
            <option value="0">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grouped">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="**************" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="**************"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white cursor-pointer py-2 mt-4"
        >
          Create Account
        </button>
        <p className="text-center mt-4">
          Already have an account?
          <a href="login.html" className="text-red-800">
            Login.
          </a>
        </p>
      </form>
    </main>
  )
}

export default Register