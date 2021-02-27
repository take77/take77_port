import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';

const Contact: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Contact.jpg' alt='Contact' title='Contact' />
        </Layout>
    )
};

export default Contact;
