import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/others/Layout';

const NotFound: React.FC<PageProps> = ({location}) => (
  <Layout pathname={location.pathname}>
    <p>Sorry, page not found!</p>
  </Layout>
);

export default NotFound;
