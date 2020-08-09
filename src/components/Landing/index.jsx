import React from 'react';
import { Fade } from 'react-reveal';
import data from '../../Data';
import './index.scss';

const Landing = () => (
  <div className="landing">
    <div className="header">
      <Fade bottom>
        {data.header}
        <div className="sub-header">{data.subHeader}</div>
      </Fade>
      {/* <button><a href={`mailto:${data.contactEmail}`}
      rel="noopener noreferrer">Contact</a></button> */}
    </div>
  </div>
);

export default Landing;
