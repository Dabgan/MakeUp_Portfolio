import React, { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    children: ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};

export default Button;
