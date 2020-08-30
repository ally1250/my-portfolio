import React, { Component, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import {
  ProjectHeaderSection, ProjectFooter, ProjectReflectionSection, Navigation,
} from '../../common';
import CoreSteps from '../../../assets/corePlatform/core-steps.svg';
import './index.scss';

import IterationIcon from '../../../assets/basicNeeds/iteration-icon.png';
import ResourceLibrary from '../../../assets/corePlatform/resource-library.png';
import ResourceLibraryRedesign from '../../../assets/corePlatform/resource-library-redesign.png';
import Forum from '../../../assets/corePlatform/the-forum.png';
import ForumRedesign from '../../../assets/corePlatform/the-forum-redesign.png';
import ForumPost from '../../../assets/corePlatform/forum-post.png';
import ForumPostRedesign from '../../../assets/corePlatform/forum-post-redesign.png';
import UserProfile from '../../../assets/corePlatform/user-profile.png';
import UserProfileRedesign from '../../../assets/corePlatform/user-profile-redesign.png';
import WeeklyPlan from '../../../assets/corePlatform/weekly-plan-sample.png';

import AnimatedHeader from '../AnimatedHeader';

const overview = [
  'The Connected and Open Research Ethics (CORE) Platform is created and maintained by a UC San Diego organization called ReCode Health. ReCode Health aims to inform ethical health research practices so they built the CORE Platform to help health researchers connect and share expertise.',
  'The objective of the redesign is to develop a cleaner and more user-friendly interface to encourage more user interactions. My work mainly focuses on improving the organization of information and the functionality of the search filters.',
  'After getting the team’s approval of the redesign, I am in the process of implementing the new CORE Platform layout with React.js.',
];

const headerSections = {
  timeline: 'April 2020 - Present',
  role: 'Designer, Front-end Developer',
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
  children, pro = [], con = [], label, redesignDescription = [],
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
          <div>
            <div className="design-type">{`${label} (Original)`}</div>
            <div className="description evaluation">
              <div className="label">
                PRO
                <ul className="pro">{pro.map((p) => <li>{p}</li>)}</ul>
              </div>
              <div className="label">
                CON
                <ul className="con">{con.map((c) => <li>{c}</li>)}</ul>
              </div>
            </div>
          </div>
          {children[0]}
        </section>
        <Tween
          from={{ x: '100%' }}
          to={{ x: '0%' }}
        >
          <section className="panel push">
            <div>
              <div className="design-type redesign">{`${label} (Redesign)`}</div>
              <div className="description changes">
                MODIFICATIONS
                <ul>{redesignDescription.map((d) => <li>{d}</li>)}</ul>
              </div>
            </div>
            {children[1]}
          </section>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

const Insight = ({ insight, type }) => (
  <div className="insight">
    {insight}
    <div className="insight-type">{type}</div>
  </div>
);

class CorePlatform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="core-platform-main">
        <Navigation />
        <ProjectHeaderSection
          header="The CORE Platform Redesign"
          overviewSections={overview}
          headerSections={headerSections}
          problemStatement="ReCode Health wants to make the entire CORE Platform more user-friendly in terms of
          information search and display."
          solution="I created redesigns for all pages of the CORE Platform to improve the experience of navigating and interacting with the tools. We then implemented the new designs with React.js for the front-end and Node.js for the back-end."
        />

        <div className="content-container narrow-contianer">
          <AnimatedHeader>Design Process</AnimatedHeader>

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
            <div className="indent-container insights-container">
              <Insight insight="Easy Navigation and Search" type="Need" />
              <Insight insight="Clean Data Organization" type="Need" />
              <Insight insight="Encourage User Interactions" type="Goal" />
              <Insight insight="Better User Interface" type="Goal" />
            </div>
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

        <div className="break-block">
          <img src={IterationIcon} alt="iteration icon" />
          <AnimatedHeader style={{ padding: 0, color: 'white', paddingTop: 40 }}>Design Modifications</AnimatedHeader>
        </div>

        <CustomScene
          pro={['prioritize search and filters', 'have color patterns for organizing resource cards', 'use bright color for accents']}
          con={['filters are inflexible and confusing', 'resource cards contain excessive detail', 'resource cards lack focus and are crowded']}
          label="Resource Library"
          redesignDescription={['remove unessential information from the cards', 'create hierarchical and multi-select filters for more flexibility and readability', 'divide content vertically and horizontally for better organization']}
        >
          <img src={ResourceLibrary} alt="resource library" />
          <img src={ResourceLibraryRedesign} alt="resource library redesign" />
        </CustomScene>

        <CustomScene
          pro={['prioritize search and filters', 'have color patterns for organizing Forum posts', 'use bright color for accents']}
          con={['filters are inflexible and confusing', 'lack emphasis on post replies and views']}
          label="The Forum"
          redesignDescription={['add favorite and share features for a more customizable experience', 'emphasize on number of votes and replies', 'create hierarchical and multi-select filters for more flexibility and readability']}
        >
          <img src={Forum} alt="forum" />
          <img src={ForumRedesign} alt="forum redesign" />
        </CustomScene>

        <CustomScene
          pro={['have color distinguishment between the question and the replies', 'emphasize on the questioner and respondents']}
          con={['hard to understand the relationship between individual replies', 'need to scroll to the bottom to post a reply']}
          label="The Forum Post Detail"
          redesignDescription={['integrate the upvote-downvote system to provide more context for users', 'create a hierarchical structure of posts and replies for clarity', 'add reply button for each post for accessibility and convenience']}
        >
          <img src={ForumPost} alt="forum post" />
          <img src={ForumPostRedesign} alt="forum post redesign" />
        </CustomScene>

        <CustomScene
          pro={['break input fields into sections']}
          con={['contain a large amount of information with limited organization', 'expand the input fields to take up the full width']}
          label="User Profile"
          redesignDescription={['group fields with cards to create a simple and clean structure', 'create a one-stop-shop to display all user information for a personalized experience']}
        >
          <img src={UserProfile} alt="user profile" />
          <img src={UserProfileRedesign} alt="user profile redesign" />
        </CustomScene>

        <div className="content-container narrow-contianer">
          <AnimatedHeader>Development Process</AnimatedHeader>

          <h3>Create a weekly development plan to keep track of progress</h3>
          <div className="indent-container indent-image">
            <img src={WeeklyPlan} alt="weekly plan sample" style={{ width: 750 }} />
          </div>
          <div className="caption">Screenshot of Week 2 Development Plans</div>

          <h3>Hold weekly development meeting for updates and troubleshoot</h3>
          <h3>Begin testing in late September, after the development completes</h3>
        </div>

        <ProjectReflectionSection
          reflectionSections={[
            'To improve the current design, it is essential to learn the purpose of each feature and what the designer wanted to communicate to users.',
            'The original filter design for the CORE platform lacked flexibility and clarity for not allowing users to deselect a filter item or select multiple items. I referenced many online resources to better understand the functionality and the design of a comprehensive filter. I visualized the hierarchical structure of the filters to create a resemblance of online shopping filters so that even new users could have prior knowledge of how to use the filter.',
            'Since testing will begin in September, I am on a very tight schedule to build a working product that meets expectations. I found that communication is the key to an agile development process. Expressing concerns and confusions to the ReCode Health team to seek feedback allowed me to learn their opinion and make adjustments in time. This method immensely reduced the time wasted on rework.',
          ]}
          feedbackSections={[
            'As both a designer and developer during the redesign of process, Ally has created and developed designs that have dramatically changed the CORE platform for the betterment of our users. Each section and feature of the platform were carefully evaluated and improved in close collaboration with the rest of the team, and Ally consistently gave quality and constructive inputs throughout. She is also persistent, recreating, and iterating whenever she felt something could be improved in the prototyping process, creating a noticeable polish in the final design. I am lucky to have worked with her on this project and wish her well on future ones.',
          ]}
          source="Shengzhi Wang"
        />

        <ProjectFooter
          next="amazon-internship"
        />
      </div>
    );
  }
}

export default CorePlatform;
