import React, { ReactNode } from 'react';
import styles from './title.module.scss';

interface TitleProps {
    glowing?: boolean;
    children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, glowing }) => {
    const glowingEffect = glowing ? styles.glowing : '';
    return <h1 className={`${styles.title} ${glowingEffect}`}>{children}</h1>;
};

export default React.memo(Title);
