import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import GraphicsList from '@/components/section/graphics/graphicsList';

const Video: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Graphic.jpg' alt='Graphic' title='Graphic' />
            <GraphicsList />
        </Layout>
    )
};

export default Video;
