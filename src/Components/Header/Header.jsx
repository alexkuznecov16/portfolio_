import './Header.css';
import React, { useState } from 'react';

import logo_icon from '../../Assets/logoipsum.png';

const Header = ({ isFixed }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Состояние для отслеживания состояния меню

    if (isMobileMenuOpen == true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); // Переключение состояния меню
    };

    const headerStyle = isFixed ? { position: 'fixed', top: 0, left: 0, zIndex: 1000 } : {};

    return (
        <>
            <header className='Header' style={headerStyle}>
                <div className='Header__container container'>
                    <div className='Header__container-inner'>
                        <div className='Header__container-inner-logo'>
                            <img src={logo_icon} alt='logo' />
                        </div>
                        <nav className='Header__container-inner-nav'>
                            <a href='#Content__ID'>Home</a>
                            <a href='#Portfolio__ID'>Portfolio</a>
                            <a href='#Contacts__ID'>Contacts</a>
                        </nav>
                        <div className='Header__container-inner-contact'>
                            <button title='Send eMail' onClick={() => (window.location.href = `mailto:alexander.kuznecov16@gmail.com`)} type='button'>
                                Contact me
                            </button>
                        </div>
                        <div onClick={toggleMobileMenu} id='openMobile' className={`openMobileMenu ${isMobileMenuOpen ? 'active' : ''}`}>
                            Menu
                        </div>
                        <div className={`Header__container-inner__mobile MobileMenu ${isMobileMenuOpen ? 'active' : ''}`}>
                            <div className='Header__container-inner__mobile-block'>
                                <span onClick={() => setMobileMenuOpen(false)}>X</span>
                                <nav className='Header__container-inner-nav'>
                                    <a onClick={() => setMobileMenuOpen(false)} href='#Content__ID'>Home</a>
                                    <a onClick={() => setMobileMenuOpen(false)} href='#Portfolio__ID'>Portfolio</a>
                                    <a onClick={() => setMobileMenuOpen(false)} href='#Contacts__ID'>Contacts</a>
                                </nav>
                                <div className='Header__container-inner-contact'>
                                    <button title='Send eMail' onClick={() => (window.location.href = `mailto:alexander.kuznecov16@gmail.com`)} type='button'>
                                        Contact me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
