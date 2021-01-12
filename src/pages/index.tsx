import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/Hero';

import SEO from '../components/SEO/seo';
import Image from '../components/image/Image';
import Button from '../components/button/Button';
import Title from '../components/title/Title';

const IndexPage: React.FunctionComponent = () => {
    return (
        <>
            <Hero>
                <Layout>
                    <SEO title="Home" />
                    <Title glowing>
                        Kinga Dąbrowska Superior Make Up and FX
                    </Title>
                    <Image />
                    <Button>Portfolio</Button>
                </Layout>
            </Hero>
        </>
    );
};

export default IndexPage;
