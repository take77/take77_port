import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import VideosList from '@/components/section/videos/videosList';

const Video: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <FirstView fileName='Video.jpg' alt='Video' title='Video' />
            <VideosList />
        </Layout>
    )
};

export default Video;
