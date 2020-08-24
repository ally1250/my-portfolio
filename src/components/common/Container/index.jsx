import React from 'react';
import './index.scss';

const Container = ({ children, style }) => (
  <div className="container" style={style}>
    {children}
  </div>
);

export default Container;
