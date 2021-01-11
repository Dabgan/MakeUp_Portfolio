import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/Hero';

import SEO from '../components/SEO/seo';
import Image from '../components/image/Image';
import Button from '../components/button/Button';

const IndexPage: React.FunctionComponent = () => {
    return (
        <>
            <Hero>
                <Layout>
                    <SEO title="Home" />
                    <h1 className="title">
                        Kinga Dąbrowska Superhero Make Up and XD
                    </h1>
                    <Image />
                    <Button>Portfolio</Button>
                </Layout>
            </Hero>
        </>
    );
};

export default IndexPage;
