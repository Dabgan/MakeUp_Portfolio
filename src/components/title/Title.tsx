import React, { ReactNode } from 'react';
import styles from './title.module.scss';

interface TitleProps {
    glowing?: boolean;
    children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }, glowing) => {
    return (
        <h1 className={`${styles.title} ${glowing ? styles.glowing : ''}`}>
            {children}
        </h1>
    );
};

export default Title;
