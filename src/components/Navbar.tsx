import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/" className="main-link">MyBank</Link>
                <span>
                {/* <Link to="/" className="link">Home</Link> */}
                <Link to="/transactions" className="link">Transactions</Link>
                <Link to="/customers" className="link">View All Customers</Link>
                </span>
            </nav>
        </div >
    )
}

export default Navbar

