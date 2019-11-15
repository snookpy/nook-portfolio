import * as React from 'react';
import Layout from '../components/Layout';

export interface AboutPageProps {

}

const AboutPage: React.SFC<AboutPageProps> = () => {
    return (
        <Layout>
            <div>
                <p>This is the about page</p>
            </div>
        </Layout>
    );
}

export default AboutPage;