import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import ServicesList from '@/components/section/services/ServicesList';

const Service: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Service.jpg' alt='Service' title='Service' />
            <ServicesList />
        </Layout>
    )
};

export default Service;
