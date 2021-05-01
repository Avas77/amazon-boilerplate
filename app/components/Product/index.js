/**
 *
 * Product
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Product() {
  return (
    <Container>
      <Title>Iphone 12</Title>
      <Price>$999</Price>
      <Rating>5 stars</Rating>
      <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000" />
      <ActionSection>
        <AddToCart>Buy</AddToCart>
      </ActionSection>
    </Container>
  );
}

Product.propTypes = {};

export default Product;

const Container = styled.div`
  padding: 20px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
  background-color: #fff;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.span``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
const AddToCart = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  height: 30px;
  border-radius: 2px;
`;
