import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/SEO/seo';

const IndexPage: React.FunctionComponent = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Kinga Dąbrowska Superhero Make Up and FX</h1>
        </Layout>
    );
};

export default IndexPage;
