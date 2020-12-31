import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Image from '../components/image/image'
import SEO from '../components/SEO/seo'

const IndexPage: React.FunctionComponent = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hello world</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/about/">Go to about</Link> <br />
        <Link to="/contact/">Go to contact</Link> <br />
    </Layout>
)

export default IndexPage
