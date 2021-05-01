/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>
      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Avas</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingCartIcon />
            <CartCount>4</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}

Header.propTypes = {};

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin: 11px 0 0 11px;
  }
`;
const HeaderOptionAddress = styled.div`
  display: flex;
  align-items: center;
  padding-left: 9px;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: #fff;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex: 1;
  height: 40px;
  border: none;

  :focus {
    outline: none;
  }
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 9px;
`;
const HeaderOptionCart = styled.div`
  display: flex;

  a {
    display: flex;
    padding-right: 9px;
    align-items: center;
    color: white;
    text-decoration: none;
  }
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearchIcon = styled.div`
  background-color: #febd69;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
`;

const CartCount = styled.div`
  padding-left: 4px;
`;
