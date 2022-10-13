import dynamic from 'next/dynamic';
import React from 'react';
import { Spinner } from './spinner';

const NonSSRWrapper = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <Spinner />,
});
