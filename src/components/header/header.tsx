import React from 'react';
import Navigation from '../navigation/Navigation';
import mystyles from './header.module.scss';

interface HeaderProps {
    siteTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = () => (
    <header className={mystyles.header}>
        <Navigation />
    </header>
);

export default React.memo(Header);
