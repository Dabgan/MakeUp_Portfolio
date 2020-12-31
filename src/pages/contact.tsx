import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO/seo'

const AboutPage: React.FunctionComponent = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Hi from the about page</h1>
        <p>Welcome to about page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage
