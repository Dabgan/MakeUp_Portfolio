import React from 'react';

import styles from './hamburger.module.scss';

interface HamburgerProps {
    toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu, isActive }) => {
    return (
        <button
            onClick={toggleMenu}
            className={`${styles.burger} ${isActive ? styles.active : ''}`}
        >
            <div />
            <div />
            <div />
        </button>
    );
};

export default Hamburger;
