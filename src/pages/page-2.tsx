import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage: React.FunctionComponent = () => (
    <Layout>
        <SEO title="About Page" />
        <h1>Hi from the about page</h1>
        <p>Welcome to about page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage
