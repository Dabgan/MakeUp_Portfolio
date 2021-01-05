import React from 'react';
import styles from './hamburger.module.scss';

const Hamburger: React.FC = () => {
    return (
        <button className={styles.burger}>
            <div />
            <div />
            <div />
        </button>
    );
};

export default Hamburger;
