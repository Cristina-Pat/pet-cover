import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import MyAccountButton from './MyAccountButton';

function Header() {
  return (
    <header>
      <Logo />
      <NavMenu />
      <MyAccountButton />
    </header>
  );
}

export default Header;
