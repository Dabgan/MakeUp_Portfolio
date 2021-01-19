import React from 'react';
import Layout from '../components/layout/layout';
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
                        <Title glowing small>
                            Kinga Dąbrowska Superior Make Up and FX
                        </Title>
                        <Image />
                        <Link
                            to="/portfolio"
                            entry={{
                                delay,
                                length: entryLength,
                            }}
                            exit={{
                                length: exitLength,
                            }}
                        >
                            <Button>Portfolio</Button>
                        </Link>
                    </Container>
                </Layout>
            </Hero>
        </>
    );
};

export default React.memo(IndexPage);
