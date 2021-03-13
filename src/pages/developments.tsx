import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import DevelopmentsList from '@/components/section/developments/DevelopentsList';
import Meta from '@/components/section/common/Meta';

const Develop: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Develop'
                description='開発関連のまとめ用のカテゴリー。React + Typescript, Ruby + Railsの記事を中心に書いていけたらいいなぁとか考えてます。'
                OgImage='Develop.jpg'
            />
            <FirstView fileName='Develop.jpg' alt='Develop' title='Develop' />
            <DevelopmentsList />
        </Layout>
    )
};

export default Develop;
