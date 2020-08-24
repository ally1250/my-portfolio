import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { ProjectHeaderSection, Footer } from '../../common';
import CoreSteps from '../../../assets/corePlatform/core-steps.svg';
import './index.scss';

import IterationIcon from '../../../assets/basicNeeds/iteration-icon.png';
import ResourceLibrary from '../../../assets/corePlatform/resource-library.png';

const overview = [
  'ReCode Health is a UC San Diego organization that informs ethical digital health research practices. They created the Connected and Open Research Ethics (CORE) Platform to help health researchers connect and share expertise.',
  'Due to the ReCode Health team’s request for a cleaner and more user-friendly interface, I created redesigns for the CORE Platform. My work mainly focused on improving the organization of information and the functionality of the search filters.',
  'After getting the team’s approval of the redesign, I am in the process of implementing the new CORE Platform layout with React.js.',
];

const headerSections = {
  timeline: 'April 2020 - Present',
  role: 'Designer, Frontend Developer',
  tools: 'Figma, React.js, SASS, Node.js',
  links: [
    {
      url: 'https://recode.health/',
      label: 'ReCode Health Website',
    },
    {
      url: 'https://thecore-platform.ucsd.edu/',
      label: 'Original CORE Platform',
    },
  ],
};

const CustomScene = ({
  children, pro = [], con = [], label,
}) => (
  <Controller>
    <Scene
      triggerHook="onLeave"
      duration="300%"
      pin
    >
      <Timeline
        wrapper={<div id="pinContainer" />}
      >
        <section className="panel original">
          {children[0]}
          <div className="design-type">{`${label} (Original)`}</div>
          <div className="evaluation">
            <ul className="pro">{pro.map((p) => <li>{p}</li>)}</ul>
            <ul className="con">{con.map((c) => <li>{c}</li>)}</ul>
          </div>
        </section>
        <Tween
          from={{ x: '100%' }}
          to={{ x: '0%' }}
        >
          <section className="panel push">
            {children[1]}
            <div className="design-type">{`${label} (Redesign)`}</div>
            <div className="evaluation">
              <ul className="pro">{pro.map((p) => <li>{p}</li>)}</ul>
              <ul className="con">{con.map((c) => <li>{c}</li>)}</ul>
            </div>
          </section>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

class CorePlatform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="core-platform-main">
        <ProjectHeaderSection
          header="The CORE Platform from ReCode Health"
          overviewSections={overview}
          headerSections={headerSections}
          problemStatement="ReCode Health wants to make the entire CORE Platform more user-friendly in terms of
          Information search and display."
          solution="I created redesigns for all pages of the CORE Platform to improve the experience of navigating and interacting with the tools. We then implemented the new designs with React.js for the frontend and Node.js for the backend."
        />

        <div className="content-container">
          <h2>Design Process</h2>

          <h3>Background Research</h3>
          <ul>
            <li>
              Explore the ReCode Health website and the
              CORE Platform to understand their objectives and identify important features.
            </li>
            <li>
              Interview ReCode Health members to
              learn their feedback on the current design and expectations for the new design.
            </li>
            {/* TODO: add insights */}
          </ul>

          <h3>Identify the Root Cause</h3>
          <ul>
            <li>
              Further examine the search feature and
              the search results to identify places for improvements.
            </li>
            <li>
              Explore other websites with similar
              objectives and analyze their strengths and weaknesses.
            </li>
          </ul>
          <div className="indent-container">
            To assess a design’s usability, I refer to the following questions:
            <ul className="indented-list">
              <li>Is it visually straightforward to use?</li>
              <li>Does it give clear feedback for users’ actions?</li>
              <li>Does it provide enough flexibility for users to achieve their goals?</li>
            </ul>
          </div>

          <h3>Make Iterative Improvements</h3>
          <div className="center">
            <img src={CoreSteps} alt="core steps" style={{ width: '80%', marginTop: '1em' }} />
          </div>
        </div>

        <div className="iterations-divider">
          <img src={IterationIcon} alt="iteration icon" />
          <h2 style={{ margin: 0, color: 'white', marginTop: 40 }}>Design Modifications</h2>
        </div>

        {/* <div className="swip-container" id="swip-container">
          <section className="swip-panel" id="first" style={{ backgroundColor: 'red' }}>
            <img src={IterationIcon} alt="iteration icon" />
          </section>
          <section className="swip-panel" id="second" style={{ backgroundColor: 'yellow' }}>
            <img src={IterationIcon} alt="iteration icon" />
          </section>
        </div> */}
        <CustomScene
          pro={['emphasis on search and filter', 'color patterns for organizing search results', 'bright color for accents']}
          con={['inflexible and confusing filters', 'excessive detail in search result cards', 'lack of focus in search result cards']}
          label="Resource Library"
        >
          <img src={ResourceLibrary} alt="core resource" style={{ width: 800 }} />
          <img src={ResourceLibrary} alt="core resource" style={{ width: 719.5 }} />
        </CustomScene>
        <CustomScene>
          <span>test</span>
          <span>test2</span>
        </CustomScene>
        <CustomScene>
          <span>test</span>
          <span>test2</span>
        </CustomScene>

        <Footer
          previous="basic-needs"
          next="basic-needs"
        />
      </div>
    );
  }
}

export default CorePlatform;
