import { useState } from 'react'
import { NavLink } from 'react-router'
import styles from "./Header.module.css"

export default function Header({ deviceSize }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <NavLink className={styles.homeLogo} to="/" end><img src="/shared/logo.svg" alt="Home" width={40} height={40} /></NavLink>

            <nav className={`navbar ${deviceSize}`}>

                {deviceSize === "mobile" ? (
                    <div className={styles.mobileMenu}>
                        <button type='button' className={styles.hamburger} onClick={toggleMenu}>
                            <img src="/shared/icon-hamburger.svg" alt="Menu" width={24} height={21} />
                        </button>
                        {menuOpen && (
                            <div className={styles.mobileMenuItems}>
                                <button type='button' className={styles.closeMenu} onClick={toggleMenu}>
                                    <img src="/shared/icon-close.svg" alt="Close" width={20} height={21} />
                                </button>
                                <NavLink className={({ isActive }) => (isActive ? styles.active : "") + " text-preset-8 blue-300"} onClick={toggleMenu} to="/" end><span className='text-preset-8-bold'>00</span> Home</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? styles.active : "") + " text-preset-8 blue-300"} onClick={toggleMenu} to="/destination" end><span className='text-preset-8-bold'>01</span> Destination</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? styles.active : "") + " text-preset-8 blue-300"} onClick={toggleMenu} to="/crew" end><span className='text-preset-8-bold'>02</span> Crew</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? styles.active : "") + " text-preset-8 blue-300"} onClick={toggleMenu} to="/technology" end><span className='text-preset-8-bold'>03</span> Technology</NavLink>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="menu-items">
                        <NavLink to="/" end><span className='text-preset-8-bold'>00</span> Home</NavLink>
                        <NavLink to="/crew" end><span className='text-preset-8-bold'>01</span> Destination</NavLink>
                        <NavLink to="/destination" end><span className='text-preset-8-bold'>02</span> Crew</NavLink>
                        <NavLink to="/technology" end><span className='text-preset-8-bold'>03</span> Technology</NavLink>
                    </div>
                )}
            </nav>
        </header>
    )
}
