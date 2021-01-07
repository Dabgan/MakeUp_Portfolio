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
}

const NavigationLink: React.FC<LinkProps> = ({
    item,
    isActive,
    toggleMenu,
}) => {
    const { path, name } = item;

    return (
        <Link
            className={`${styled.navItem} ${isActive ? styled.active : ''}`}
            to={path}
            exit={{
                length: 0.5,
                trigger: () => toggleMenu(),
            }}
            entry={{
                delay: 0.35,
                length: 0.2,
            }}
        >
            {name}
        </Link>
    );
};

export default NavigationLink;
