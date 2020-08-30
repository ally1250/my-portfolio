import React from 'react';
import { Fade } from 'react-reveal';
import Container from '../Container/index';
import './index.scoped.scss';

const Header = ({ header, style }) => (
  <Container>
    <Fade bottom>
      <div className="header" style={style}>
        {header}
      </div>
    </Fade>
  </Container>
);

export default Header;
