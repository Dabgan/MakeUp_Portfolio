import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TransitionState } from 'gatsby-plugin-transition-link';
import useTransitionState from '../../hooks/useTransitionState';

import Header from '../header/header';
import Footer from '../footer/Footer';

import styles from './layout.module.scss';

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
        <TransitionState>
            {({ transitionStatus }) => {
                const tween = useTransitionState(transitionStatus);
                return (
                    <div className={styles.wrapper}>
                        <Header
                            siteTitle={data.site.siteMetadata?.title || `Title`}
                        />
                        <div className={styles.container}>
                            <main className={`${styles.main} ${tween}`}>
                                {children}
                            </main>
                            <Footer></Footer>
                        </div>
                    </div>
                );
            }}
        </TransitionState>
    );
};

export default Layout;
