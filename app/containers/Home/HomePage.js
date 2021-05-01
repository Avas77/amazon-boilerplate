import React from 'react';
import Banner from '../../components/Banner';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Product from '../../components/Product';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Banner />
      <Content>
        <Product />
        <Product />
      </Content>
    </div>
  );
}

const Content = styled.div`
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`;
