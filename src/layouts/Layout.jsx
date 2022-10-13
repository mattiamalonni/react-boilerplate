import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '../components';
import { loadingSelector } from './../containers/App/selectors';

const Layout = ({ pageTitle, ...props }) => {
  const loading = useSelector(loadingSelector());

  return (
    <div className="font-roboto font-thin">
      <Navbar />
      <div className="px-5 py-4">
        <h1>{pageTitle}</h1>
        <hr className="my-5" />
        {loading ? <div className="text-center">... loading ...</div> : props.children}
      </div>
    </div>
  );
};

export default Layout;
