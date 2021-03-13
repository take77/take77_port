import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import GraphicsList from '@/components/section/graphics/graphicsList';
import Meta from '@/components/section/common/Meta';

const Video: React.FC<PageProps> = ({location}) => {
    return (
        <Layout pathname={location.pathname}>
            <Meta
                title='Graphic'
                description='Adobe系の制作に関する知見や自分用のまとめをするためのカテゴリー。PhotoShopやIllustrator、PremiereやAfterEffectなどのまとめ。'
                OgImage='Graphic.jpg'
            />
            <FirstView fileName='Graphic.jpg' alt='Graphic' title='Graphic' />
            <GraphicsList />
        </Layout>
    )
};

export default Video;
