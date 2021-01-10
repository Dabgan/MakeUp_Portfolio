import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { TransitionState } from 'gatsby-plugin-transition-link';

import styles from './hero.module.scss';
import animation from '../layout/layoutAnimations.module.scss';

interface HeroProps {
    children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
    const { desktop, tablet } = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "hero-photo.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tablet: file(relativePath: { eq: "hero-cut.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1248) {
                        ...GatsbyImageSharpFluid
                    }
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

    const imagesStack = [
        {
            ...desktop.childImageSharp.fluid,
            media: `(min-width: 1200px)`,
        },
        {
            ...tablet.childImageSharp.fluid,
            media: `(min-width: 768px)`,
        },
    ];

    return (
        <TransitionState>
            {({ transitionStatus }) => {
                return (
                    <div
                        className={`${styles.parent} ${setTransitionAnimation(
                            transitionStatus
                        )}`}
                    >
                        <Img
                            className={styles.bgimage}
                            fluid={imagesStack}
                            title="hero background"
                        />
                        <div className={styles.content}>{children}</div>
                    </div>
                );
            }}
        </TransitionState>
    );
};

export default Hero;
