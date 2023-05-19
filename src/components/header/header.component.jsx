import React, { Fragment } from 'react'
import {HeaderContainer} from './header.styles'
import NavigationBar from '../navigation/navigation.components'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Link to='/'>Chocolate</Link>
        <NavigationBar />
      </HeaderContainer>
    </Fragment>
  );
}

export default Header
