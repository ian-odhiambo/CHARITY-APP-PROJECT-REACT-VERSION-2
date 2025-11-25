import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/IMAGE/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-300">
      <nav className="flex container mx-auto justify-between items-center py-5">
        <Link to="/" className="logo flex items-center">
          <img
            src={Logo}
            alt="Charity Minds logo"
            className="h-10 w-auto mr-2"
          />
          <h1 className="font-bold italic text-lg">Charity Minds</h1>
        </Link>
        <ul className="flex gap-5 text-red-800 font-bold">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header