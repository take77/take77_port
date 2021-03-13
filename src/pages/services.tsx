import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import ServicesList from '@/components/section/services/ServicesList';
import Meta from '@/components/section/common/Meta';

const Service: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Service'
                description='私が今までに立ち上げてきたサービス、潰してきたサービスとその周辺の内容をまとめていきます。'
                OgImage='Service.jpg'
            />
            <FirstView fileName='Service.jpg' alt='Service' title='Service' />
            <ServicesList />
        </Layout>
    )
};

export default Service;
