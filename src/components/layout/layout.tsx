import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import styles from './layout.module.scss';
import Footer from '../footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className={styles.layout}>
                <main>{children}</main>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Layout;
