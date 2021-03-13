import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import OthersList from '@/components/section/others/OthersList';
import Meta from '@/components/section/common/Meta';

const Others: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Other'
                description='趣味としてまとめるのもなんだかなぁ、というような雑多な内容をこちらにまとめていきます。'
                OgImage='Other.jpg'
            />
            <FirstView fileName='Other.jpg' alt='Other' title='Other' />
            <OthersList />
        </Layout>
    )
};

export default Others;
