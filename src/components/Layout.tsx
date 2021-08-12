import React, { FC } from 'react';

const NavBar = React.lazy(() => import('./common/NavBar'));
const Footer = React.lazy(() => import('./common/Footer'));

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
