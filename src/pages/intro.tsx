import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';

const Intro: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Intro.jpg' alt='Intro' title='Intro' />
        </Layout>
    )
};

export default Intro;
