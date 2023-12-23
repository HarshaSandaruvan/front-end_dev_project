import React from 'react'
import logo from '../../assets/images/whiteLogo.png'
import config from '../../config/colors/colors.json'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div>
            <nav
                className={`navbar navbar-expand-sm ${styles.navBar}`}
                style={{ backgroundColor: `${config.primaryColor}` }}
            >
                <div className="container-fluid">
                    <img
                        src={logo}
                        className={`${styles.navBarLogo} navbar-brand`}
                        alt='White-Logo'
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ border: 'none' }}>
                        <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
                    </button>

                    <div
                        className={`collapse navbar-collapse ${styles.navCollapsebar}`}
                        id="navbarTogglerDemo01"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className={`nav-link ${styles.navLink}`} aria-current="page" href="#" >SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.navLink}`} href="#" >ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.navLink}`} href="#" >CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.navLink}`} href="#" >CAREERS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
