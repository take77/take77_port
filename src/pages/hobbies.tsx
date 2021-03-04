import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import HobbiesList from '@/components/section/hobbies/HobbiesList';


const Hobby: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Hobby.jpg' alt='Hobby' title='Hobby' />
            <HobbiesList />
        </Layout>
    )
}

export default Hobby;
