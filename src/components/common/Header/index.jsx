import React from 'react';
import { Fade } from 'react-reveal';
import Container from '../Container/index';
import './index.scss';

const Header = ({ header }) => (
  <Container>
    <Fade bottom>
      <div className="header">
        {header}
      </div>
    </Fade>
  </Container>
);

export default Header;
