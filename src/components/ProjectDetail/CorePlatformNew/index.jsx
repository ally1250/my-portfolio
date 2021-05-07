import React, { Component, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import {
  ProjectHeaderSection, ProjectFooter, ProjectReflectionSection, Navigation,
} from '../../common';
import CoreSteps from '../../../assets/corePlatform/core-steps.svg';
import './index.scss';

import IterationIcon from '../../../assets/basicNeeds/iteration-icon.png';
import ResourceLibrary from '../../../assets/corePlatform/resource-library-gif.gif';
import ResourceLibraryRedesign from '../../../assets/corePlatform/resource-library-redesign-gif.gif';
import Forum from '../../../assets/corePlatform/the-forum.png';
import ForumRedesign from '../../../assets/corePlatform/the-forum-redesign.png';
import ForumPost from '../../../assets/corePlatform/forum-post.png';
import ForumPostRedesign from '../../../assets/corePlatform/forum-post-redesign.png';
import UserProfile from '../../../assets/corePlatform/user-profile.png';
import UserProfileRedesign from '../../../assets/corePlatform/user-profile-redesign.png';
import WeeklyPlan from '../../../assets/corePlatform/weekly-plan-sample.png';
import CORE from '../../../assets/recodeHealthNew/RecodeHealth.png';
import COREMessaging from '../../../assets/recodeHealthNew/core-messaging.png';
import COREForum from '../../../assets/recodeHealthNew/core-forum.png';

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

const navigations = [
  {
    to: 'overview',
    label: 'Overview',
  },
  {
    to: 'design-process',
    label: 'Design',
  },
  {
    to: 'development-process',
    label: 'Development',
  },
  {
    to: 'reflection',
    label: 'Reflection',
  },
];

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
      <div className="amazon-main core-platform-main">
        {/* <Navigation navigations={navigations} /> */}
        <div className="header-container" style={{ backgroundColor: '#bd520a', paddingBottom: '3em' }}>
          <h1 style={{ color: 'white' }}>The CORE Redesign</h1>
          <p style={{ color: 'white', width: '37%' }}>A large community for public health researhers to connect and share expertise.</p>
          <div className="intro-img-container">
            <img src={CORE} alt="core" style={{ width: 650 }} />
          </div>
        </div>

        <div className="header-container sections" style={{ boxShadow: 'none', paddingBottom: 0, paddingTop: '2em' }}>
          <p>
            <div className="section-header">Links</div>
            <a href={headerSections.links[1].url} target="_blank" rel="noreferrer">{headerSections.links[1].label}</a>
          </p>
          <p>
            <div className="section-header">Timeline</div>
            {headerSections.timeline}
          </p>
          <p>
            <div className="section-header">Role</div>
            {headerSections.role}
          </p>
          <p>
            <div className="section-header">Tools</div>
            {headerSections.tools}
          </p>
        </div>

        <div className="design-process content-container">
          {/* <AnimatedHeader style={{ textTransform: 'uppercase' }}>Introduction</AnimatedHeader> */}
          <p>
            <b>“I wish I could connect with more people in my field to share our expertise and experiences.”</b>
            {' '}
            This is a quote by one of the health researchers we interviewed when redesigning the Connected and Open Research Ethics (CORE) Platform.
            The purpose of the CORE Platform is to inform ethical health research practices and encourage health researchers to share information.
            However, with CORE Platform’s current design, users do not get the flexibility to interact and communicate with other members of the CORE Platform.
          </p>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Problem Statement</AnimatedHeader>
          <p>Due to disjointed communities, health researchers need a way to effectively connect with other people in the same field so they can easily gather information and share experiences among themselves in order to facilitate ethical health research.</p>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Project Overview</AnimatedHeader>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>User Research</AnimatedHeader>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Prototyping</AnimatedHeader>
        </div>

        <div className="indent-container indent-image">
          <img src={COREMessaging} alt="amazon project sketch 1" style={{ width: 850 }} />
        </div>
        <div className="caption small-indent">Chat Room Design</div>

        <div className="indent-container indent-image">
          <img src={COREForum} alt="amazon project sketch 1" style={{ width: 850 }} />
        </div>
        <div className="caption small-indent">Up-vote and Down-vote Feature</div>

        <div className="divider" />

        <div className="break-block" style={{ backgroundColor: '#bd520a' }}>
          <p style={{ color: 'white' }}>In addition to the new features, I also redesigned the three main pages of the CORE platform for </p>
          {/* <img src={IterationIcon} alt="iteration icon" /> */}
          <AnimatedHeader style={{
            padding: 0, color: 'white', paddingTop: 40, fontSize: 45,
          }}
          >
            Improvements in Usability
          </AnimatedHeader>
        </div>

        <CustomScene
          pro={['prioritize search and filters', 'have color patterns for organizing resource cards', 'use bright color for accents']}
          con={['filters are inflexible and confusing', 'resource cards contain excessive detail', 'resource cards lack focus and are crowded']}
          label="Resource Library"
          redesignDescription={['remove unessential information from the cards', 'create hierarchical and multi-select filters for more flexibility and readability', 'divide content vertically and horizontally for better organization']}
        >
          <img src={ResourceLibrary} alt="resource library" />
          {/* <img src={ResourceLibraryRedesign} alt="resource library redesign" /> */}
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

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>User Testing</AnimatedHeader>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Development</AnimatedHeader>
        </div>

        <div className="indent-container indent-image">
          <img src={WeeklyPlan} alt="weekly plan sample" style={{ width: 750 }} />
        </div>
        <div className="caption">Screenshot of Week 2 Development Plans</div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Reflection</AnimatedHeader>
          <p>To be added...</p>
          <p>
            <div className="feedback-section">
              As both a designer and developer during the redesign of process, Ally has created and developed designs that have dramatically changed the CORE platform for the betterment of our users. Each section and feature of the platform were carefully evaluated and improved in close collaboration with the rest of the team, and Ally consistently gave quality and constructive inputs throughout. She is also persistent, recreating, and iterating whenever she felt something could be improved in the prototyping process, creating a noticeable polish in the final design. I am lucky to have worked with her on this project and wish her well on future ones.
              <div className="quote-source">--- Shengzhi Wang (Teammate)</div>
            </div>
          </p>
        </div>

        <ProjectFooter
          next="amazon-internship"
        />
      </div>
    );
  }
}

export default CorePlatform;
