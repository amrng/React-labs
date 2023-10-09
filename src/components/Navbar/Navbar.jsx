/* eslint-disable no-unused-vars */

import React from 'react'
import style from "./Navbar.module.css"
import img from "../../img/logo300.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark w-100">
  <div className="container">
    <Link className="navbar-brand" to={""}><img src={img} width={54} alt="" /> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/register"}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"/profile"}>Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/logout"}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
