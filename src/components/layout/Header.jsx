import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header'>
            <div className="header__inner">
                <h1 className='header__logo'>
                    <Link to="/">KPUNi</Link>
                </h1>
                <nav className='header__menu' role="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/country">Country</Link></li>
                        <li><Link to="/">K-pop</Link></li>
                        <li><Link to="/">community</Link></li>
                        <li><Link to="/">Comment</Link></li>
                    </ul>
                </nav>
                <div className='header__utils'>
                    <Link to="/">login</Link>
                    <Link to="/" className='active'>register</Link>
                    <button className='menu'>
                        <span className="blind">mobile menu</span>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header