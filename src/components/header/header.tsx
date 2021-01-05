import { Link } from 'gatsby';
import React from 'react';
import mystyles from './header.module.scss';

interface HeaderProps {
    siteTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
    <header className={mystyles.header}>
        <h1>
            <Link to="/">{siteTitle}</Link>
        </h1>
    </header>
);

export default Header;
