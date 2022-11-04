import React from 'react'
import {NavLink} from 'react-router-dom'

function index() {
  return (
    <header className="App-header">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md" aria-label="Navbar Main">
                <NavLink className="bar-brand" href="/">Be like Julia</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-main">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/leistungen" className="nav-link">Leistungen</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/preise" className="nav-link">Preise</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default index