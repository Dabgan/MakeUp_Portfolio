import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import Footer from '../footer/Footer';

import styles from './layout.module.scss';
import { TransitionState } from 'gatsby-plugin-transition-link';
import animation from './layoutAnimations.module.scss';

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

    const setTransitionAnimation = (state: string) => {
        switch (state) {
            case 'entering':
                return animation.entering;
            case 'entered':
                return animation.entered;
            case 'exiting':
                return animation.exiting;
            case 'exited':
                return animation.exited;
            default:
                break;
        }
    };

    return (
        <TransitionState>
            {({ transitionStatus }) => {
                return (
                    <div className={styles.wrapper}>
                        <Header
                            siteTitle={data.site.siteMetadata?.title || `Title`}
                        />
                        <div className={styles.container}>
                            <main
                                className={`${
                                    styles.main
                                } ${setTransitionAnimation(transitionStatus)}`}
                            >
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
