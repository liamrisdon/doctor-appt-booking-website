import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from "../assets/images/logo.jpg";
import avatar from "../assets/images/small-avatar-rounded.jpg";

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Doctors'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
];

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky");
            } else {
                headerRef.current.classList.remove("sticky")
            }
        })
    }

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

    return (
        <header className="header flex bg-heading p-4" ref={headerRef}>
            <div className="container flex items-center justify-between space-x-8">

                <img className="object-scale-down h-20 w-60 mix-blend-multiply" src={logo} alt="" />

                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={navClass =>
                                        navClass.isActive
                                            ? "text-primary text-[15px] leading-7 font-[500]"
                                            : "text-textColor text-[15px] leading-7 font-[400] hover:text-primary"
                                    }
                                >
                                    {link.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center space-x-8">
                    <div className="hidden">
                        <Link to='/'>
                            <figure className="w-10 h-10 rounded-full cursor-pointer">
                                <img src={avatar} className="w-full h-full rounded-full" alt="" />
                            </figure>
                        </Link>
                    </div>
                    <Link to='/login'>
                        <button className="bg-primary py-2 px-6 text-white font-[400] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
                    </Link>

                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
