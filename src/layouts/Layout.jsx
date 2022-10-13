import React from 'react';

import { Navbar } from '../components';

const Layout = ({ pageTitle, ...props }) => {
  return (
    <div className="font-roboto font-thin">
      <Navbar />
      <div className="px-5 py-4">
        <h1>{pageTitle}</h1>
        <hr className="my-5" />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
