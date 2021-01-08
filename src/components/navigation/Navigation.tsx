import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import Hamburger from '../hamburger/Hamburger';
import NavigationLink from './NavigationLink';

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
    const [tweenLength, setTweenLength] = useState({
        entryLength: 0.35,
        delay: 0.2,
        exitLength: 0.5,
    });
    const matched = useMediaQuery('(min-width: 1200px)');

    useEffect(() => {
        const calculateTween = matched
            ? {
                  entryLength: 0.2,
                  delay: 0,
                  exitLength: 0.2,
              }
            : {
                  entryLength: 0.3,
                  delay: 0.3,
                  exitLength: 0.5,
              };

        setTweenLength(calculateTween);
    }, [matched]);

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
                            tweenLength={tweenLength}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
