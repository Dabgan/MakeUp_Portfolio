import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO/Seo';
import Title from '../components/title/Title';
import { graphql } from 'gatsby';
import styles from '../assets/styles/pages/contact.module.scss';
import Socials from '../components/socials/Socials';

interface ContactDatoCms {
    data: {
        contact: {
            info: string;
        };
    };
}

const AboutPage: React.FunctionComponent<ContactDatoCms> = ({ data }) => {
    const { info } = data.contact;

    return (
        <Layout>
            <SEO title="Contact" />
            <div className={styles.wrapper}>
                <Title>Contact</Title>
                <div className={styles.information}>
                    <div
                        className={styles.info}
                        dangerouslySetInnerHTML={{
                            __html: info,
                        }}
                    />
                    <Socials />
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        contact: datoCmsContact {
            info
        }
    }
`;

export default React.memo(AboutPage);
