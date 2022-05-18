import React from 'react';
import Navigation from '../navigation/Navigation';
import myStyles from './header.module.scss';

interface HeaderProps {
    siteTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = () => (
    <header className={myStyles.header}>
        <Navigation />
    </header>
);

export default React.memo(Header);
