import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';

import SEO from '../components/SEO/seo';
import Image from '../components/image/Image';
import Button from '../components/button/Button';
import Title from '../components/title/Title';
import Container from '../components/container/Container';
import Link from 'gatsby-plugin-transition-link';

import useCalculatePageTween from '../hooks/useCalculatePageTween';

const IndexPage: React.FunctionComponent = () => {
    const { entryLength, delay, exitLength } = useCalculatePageTween();

    return (
        <>
            <Hero>
                <Layout>
                    <SEO title="Home" />
                    <Container>
                        <Title small>
                            <span className="text-block neon-text">
                                Kinga Dąbrowska
                            </span>{' '}
                            Superior{' '}
                            <span className="neon-text-delayed">Make Up </span>
                            and FX
                        </Title>
                        <Image />

                        <Button>
                            <Link
                                to="/portfolio/"
                                entry={{
                                    delay,
                                    length: entryLength,
                                }}
                                exit={{
                                    length: exitLength,
                                }}
                            >
                                Portfolio
                            </Link>
                        </Button>
                    </Container>
                </Layout>
            </Hero>
        </>
    );
};

export default React.memo(IndexPage);
