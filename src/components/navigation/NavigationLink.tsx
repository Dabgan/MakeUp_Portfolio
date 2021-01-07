import React from 'react';
import Link from 'gatsby-plugin-transition-link';

import styled from './navigation.module.scss';

interface LinkProps {
    item: {
        path: string;
        name: string;
    };
    isActive: boolean;
    toggleMenu: () => void;
    tweenLength: {
        entryLength: number;
        delay: number;
        exitLength: number;
    };
}

const NavigationLink: React.FC<LinkProps> = ({
    item,
    isActive,
    toggleMenu,
    tweenLength,
}) => {
    const { path, name } = item;
    const { entryLength, delay, exitLength } = tweenLength;

    return (
        <Link
            className={`${styled.navItem} ${isActive ? styled.active : ''}`}
            to={path}
            entry={{
                delay,
                length: entryLength,
            }}
            exit={{
                length: exitLength,
                trigger: () => toggleMenu(),
            }}
        >
            {name}
        </Link>
    );
};

export default NavigationLink;
