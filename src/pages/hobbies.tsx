import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';

const Hobby: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Hobby.jpg' alt='Hobby' title='Hobby' />
        </Layout>
    )
}

export default Hobby;
