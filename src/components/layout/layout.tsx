import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TransitionState } from 'gatsby-plugin-transition-link';
import useTransitionState from '../../hooks/useTransitionState';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
    limitedHeight?: boolean;
    marginTopZero?: boolean;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
    limitedHeight,
    marginTopZero,
}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const isHeightSet = limitedHeight ? styles.limitedHeight : '';
    const marginTop = marginTopZero ? styles.zeroTopMargin : '';

    return (
        <TransitionState>
            {({ transitionStatus }) => {
                const tween = useTransitionState(transitionStatus);
                return (
                    <div className={`${styles.wrapper} ${isHeightSet} `}>
                        <Header
                            siteTitle={data.site.siteMetadata?.title || `Title`}
                        />
                        <div className={`${styles.container} ${marginTop} `}>
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
