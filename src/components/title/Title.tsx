import React, { ReactNode } from 'react';
import styles from './title.module.scss';

interface TitleProps {
    noShadow?: boolean;
    children: ReactNode;
    small?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, noShadow, small }) => {
    const glowingEffect = noShadow ? '' : styles.glowing;
    const isSmall = small ? styles.small : '';
    return (
        <h1 className={`${styles.title} ${glowingEffect} ${isSmall}`}>
            {children}
        </h1>
    );
};

export default React.memo(Title);
