import React from 'react';
import { Fade } from 'react-reveal';

const AnimatedHeader = ({ children, style, className }) => (
  <Fade bottom>
    <h2 style={style} className={className}>{children}</h2>
  </Fade>
);

export default AnimatedHeader;
