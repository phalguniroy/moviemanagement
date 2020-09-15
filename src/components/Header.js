import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        
        <div className="container pt-1">
        <header >
        <ul className="nav justify-content-center bg-warning text-dark">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/watch List">Watch List</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/watched">Watched</Link>
        </li>
      </ul>
      </header>
      </div>
        
    )
}
