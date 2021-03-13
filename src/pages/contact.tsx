import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import Form from '@/components/section/contact/Form';
import Notice from '@/components/section/contact/Notice';
import FormBackDrop from '@/components/parts/FormBackDrop';
import Meta from '@/components/section/common/Meta';

const Contact: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Contact'
                description='take77に聞きたいことや罵倒したいこと、魂の慟哭などはこちらにお願いします。お仕事の依頼などもお気軽にどうぞ。'
            />
            <Notice />
            <FormBackDrop />
            <FirstView fileName='Contact.jpg' alt='Contact' title='Contact' />
            <Form />
        </Layout>
    )
};

export default Contact;
