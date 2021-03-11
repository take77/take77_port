import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import OthersList from '@/components/section/others/OthersList';

const Others: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Other.jpg' alt='Other' title='Other' />
            <OthersList />
        </Layout>
    )
};

export default Others;
