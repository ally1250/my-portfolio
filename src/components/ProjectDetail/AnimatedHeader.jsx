import React from 'react';
import { Fade } from 'react-reveal';

const AnimatedHeader = ({ children, style }) => (
  <Fade bottom>
    <h2 style={style}>{children}</h2>
  </Fade>
);

export default AnimatedHeader;
