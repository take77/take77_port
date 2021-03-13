import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';
import FirstView from '@/components/section/common/FirstView';
import Message from '@/components/section/404/Message';


const NotFound: React.FC<PageProps> = ({location}) => (
  <Layout pathname={location.pathname}>
    <FirstView
      fileName='404.jpg'
      title='404'
      alt='404 Not Found'
    />
    <Message />
  </Layout>
);

export default NotFound;
