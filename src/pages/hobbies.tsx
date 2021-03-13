import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import HobbiesList from '@/components/section/hobbies/HobbiesList';
import Meta from '@/components/section/common/Meta';


const Hobby: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Hobby'
                description='自作PC関連のお話やソロキャンに関するお話とかについて適当にまとめていくカテゴリーです'
                OgImage='Hobby.jpg'
            />
            <FirstView fileName='Hobby.jpg' alt='Hobby' title='Hobby' />
            <HobbiesList />
        </Layout>
    )
}

export default Hobby;
