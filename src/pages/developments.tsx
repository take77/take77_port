import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/others/Layout';
import FirstView from '@/components/section/common/FirstView';

const Develop: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Develop.jpg' alt='Develop' title='Develop' />
        </Layout>
    )
};

export default Develop;