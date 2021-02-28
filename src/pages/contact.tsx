import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import Form from '@/components/section/contact/Form';
import Notice from '@/components/section/contact/Notice';
import FormBackDrop from '@/components/parts/FormBackDrop';

const Contact: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Notice />
            <FormBackDrop />
            <FirstView fileName='Contact.jpg' alt='Contact' title='Contact' />
            <Form />
        </Layout>
    )
};

export default Contact;
