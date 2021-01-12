import React, { useState, useEffect } from 'react';

import Hamburger from '../hamburger/Hamburger';
import NavigationLink from './NavigationLink';
import useCalculatePageTween from '../../hooks/useCalculatePageTween';

import styled from './navigation.module.scss';

const menuItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const Navigation: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [locationPath, setLocationPath] = useState('');
    const tween = useCalculatePageTween();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        setLocationPath(location.pathname);
    }, []);

    const handleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className={styled.navbar}>
            <Hamburger toggleMenu={handleMenu} isActive={menuOpen} />

            <ul className={`${styled.navList} ${menuOpen ? styled.open : ''}`}>
                {menuItems.map(item => {
                    return (
                        <NavigationLink
                            key={item.name}
                            item={item}
                            isActive={locationPath === item.path}
                            toggleMenu={handleMenu}
                            tweenLength={tween}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
