import React from 'react';
import { Fade } from 'react-reveal';
import data from '../../Data';
import './index.scss';

const Landing = () => (
  <div className="landing">
    <div className="landing-header">
      <Fade bottom>
        {data.header}
        <div className="sub-header">
          I am passionate about creating
          {' '}
          <span className="design">human-centered designs</span>
          {' '}
          and realizing them with my experience in
          {' '}
          <span className="develop">software development</span>
          .
        </div>
      </Fade>
      {/* <button><a href={`mailto:${data.contactEmail}`}
      rel="noopener noreferrer">Contact</a></button> */}
    </div>
  </div>
);

export default Landing;
