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
      duration="100%"
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
                <ul className="pro">
                  {pro.map((p) => <li>{p}</li>)}
                </ul>
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
      <div className="amazon-main core-platform-new-main">
        {/* <Navigation navigations={navigations} /> */}
        <div className="header-container" style={{ backgroundColor: '#bd520a', paddingBottom: '3em' }}>
          <h1 style={{ color: 'white' }}>The CORE Redesign</h1>
          <p style={{ color: 'white', width: '37%' }}>A large community for public health researhers to connect and share expertise.</p>
          <div className="intro-img-container">
            <img src={CORE} alt="core" style={{ width: 650 }} />
          </div>
        </div>

        <div className="header-container sections" style={{ boxShadow: 'none', paddingBottom: 0, paddingTop: '4em' }}>
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
          <AnimatedHeader style={{ textTransform: 'uppercase', margin: 0, padding: 0 }}>Overview</AnimatedHeader>
          <p>
            In order to overcome this common issue faced by the CORE Platform user, we decided to redesign the CORE Platform to improve the functionality of various features of the platform. The project consists of four stages:
            <ol>
              <li>user research</li>
              <li>prototyping</li>
              <li>user testing</li>
              <li>implementation</li>
            </ol>
            Each stage requires my knowledge in both design and coding in order to find a balance between what is wanted and what is feasible. After the new design was finalized by the whole team, I started implementing the front-end in React.js with my partner working on the back-end with Node.js.
          </p>
        </div>

        <div className="design-process content-container problem-statement">
          <AnimatedHeader style={{ textTransform: 'uppercase', margin: 0 }}>Problem Statement</AnimatedHeader>
          Due to disjointed communities, health researchers need a way to effectively connect with other people in the same field so they can easily gather information and share experiences among themselves in order to facilitate ethical health research.
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase', margin: 0, padding: 0 }}>User Research</AnimatedHeader>
          <p>
            We interviewed several members on the team and some current users of the CORE Platform. From our conversations, I summarized two main issues the current design has that caused users to feel disconnected with each other:
            <ul>
              <li>
                <b>Lack of ways to contact and communicate with each other.</b>
                {' '}
                Even though the current platform has a Network page for users to view others information, it does not have the functionality that supports communication between users. We also noticed that only a few users provided their contact information in their profiles, which makes us feel the importance of encouraging users to be more involved.
              </li>
              <li>
                <b>Lack of ways to express thoughts and share expertise.</b>
                {' '}
                The CORE Platform has a Forum where users can ask questions and respond to each other’s posts. However, the interactivity for the Forum is low so in order to improve this, we need simpler ways for users to participate in Forum discussions.
              </li>
            </ul>
          </p>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase', margin: 0, padding: 0 }}>Prototyping</AnimatedHeader>
          <h3>The Network Page</h3>
          <p>I added a chat room functionality for users to communicate within the platform. This eliminates the trouble of finding someone’s contact information and messaging them through another means. It makes communication more accessible and efficient for health researchers and would encourage them to share ideas and learn from other experts in the field.</p>
        </div>

        <div className="indent-container indent-image">
          <img src={COREMessaging} alt="amazon project sketch 1" style={{ width: 850 }} />
        </div>
        <div className="caption small-indent">Chat Room Design</div>

        <div className="design-process content-container">
          <h3>The Forum Page</h3>
          <p>I included a new voting functionality in which users can up-vote or down-vote all Forum posts. Users can now quickly and easily express their opinion on the discussion they are interested in by giving their votes. The votes also act as a criteria for users to refer to when considering the usefulness of the discussions.</p>
        </div>

        <div className="indent-container indent-image">
          <img src={COREForum} alt="amazon project sketch 1" style={{ width: 850 }} />
        </div>
        <div className="caption small-indent">Up-vote and Down-vote Feature</div>

        {/* <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>User Testing</AnimatedHeader>
          <p>I presented my design to the team and asked a few participants to walk through the prototype and give their feedback. With the user testing results, I iterated on the redesign to create the final version.</p>
        </div> */}

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
          <AnimatedHeader style={{ textTransform: 'uppercase', marginTop: '3em', padding: 0 }}>Development</AnimatedHeader>
          <p>To help keep track of progress, we created a detailed week-to-week plan before starting on coding. We used React with SCSS for building the front-end for more customizability in the UI. For the back-end, we used GraphQL to manage and retrieve data from the database. </p>
        </div>

        <div className="indent-container indent-image">
          <img src={WeeklyPlan} alt="weekly plan sample" style={{ width: 750 }} />
        </div>
        <div className="caption">Screenshot of Week 2 Development Plans</div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase', marginTop: '3em', padding: 0 }}>Reflection</AnimatedHeader>
          <p>This project was a valuable experience for me as it allowed me to gain knowledge on the entire workflow of building an application from scratch. </p>
          <p>One thing I wish I have done better is to come up with a concrete timeline that is actually feasible. The initial week-to-week plan was on an extremely tight schedule but we failed to notice it until we were in the middle of the plan. Each week we tried our best to follow the plan but still needed to move some work to the following week. The work gradually built up so we had to push our deadline back multiple times.</p>
          <p>
            If I were to do a similar project in the future, I would create a less stressful plan and give more accurate estimations for each task. I remember a professor once said,
            <i><b>“the actual time needed to complete any task equals your own estimate times two plus 1”</b></i>
            . One important lesson I learned from this project is that do not ever underestimate the workload and try not to overestimate your speed.
            It is better to set a late deadline than to keep pushing back the deadline because the later would cause the client to question your reliability.
          </p>

          <div className="divider" />

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
