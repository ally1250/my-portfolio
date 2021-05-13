import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import {
  ProjectHeaderSection, ProjectFooter, ProjectReflectionSection, Navigation, NavLink,
} from '../../common';
import Sketch1 from '../../../assets/amazonProject/sketch-1.png';
import Sketch2 from '../../../assets/amazonProject/sketch-2.png';
import Workflow1 from '../../../assets/amazonProject/amazon-workflow-1.png';
import Workflow2 from '../../../assets/amazonProject/amazon-workflow-2.png';
import HarViewer from '../../../assets/amazonProject/har-viewer.png';
import HarViewerError from '../../../assets/amazonProject/har-viewer-error.png';
import HarViewerDetail from '../../../assets/amazonProject/har-viewer-detail.png';
import HarViewerHover from '../../../assets/amazonProject/har-viewer-hover.png';
import HarViewerChart from '../../../assets/amazonProject/har-viewer-chart.png';
import HarViewerFinal from '../../../assets/harViewerNew/har-viewer.png';
import HarViewerNoBorder from '../../../assets/harViewerNew/har-viewer-noborder.png';

import { Image } from '../BasicNeeds';
import AnimatedHeader from '../AnimatedHeader';

import './index.scoped.scss';

const overview = [
  'For my intern project at Amazon Relational Database Service (RDS) team, I built an HTTP analyzer called the Har Viewer that visualizes network requests for production traffic.',
  'In the scenario when a customer files a ticket complaining about a really long page load, it is almost impossible for developers to quickly identify the cause if not enough context about the client-side activity is provided. Therefore, the objective of my intern project at Amazon was to design and build a tool for developers to check client-side network traffic.',
  'With the Har Viewer, developers can easily pinpoint any cause of slow performance by tracing API call details within a given time range.',
];

const headerSections = {
  timeline: 'June - September 2019',
  role: 'Designer, Developer',
  tools: 'React, CSS, SQL, HTML, AWS',
  links: [
    {
      url: 'https://docs.google.com/document/d/1fi_lv-3GkB6cXRbZv-2gmjITDgHbVK04kgzBg5cApU0/edit?usp=sharing',
      label: 'Design Document',
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

class AmazonInternship extends Component {
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
      <div className="amazon-main">
        {/* <Navigation navigations={navigations} /> */}
        <div className="header-container overview" style={{ backgroundColor: '#232F3E' }}>
          <h1 style={{ color: 'white', textTransform: 'uppercase' }}>Har Viewer</h1>
          <p style={{ color: 'white', width: '35%' }}>A simple tool for developers to analyze client-side network performance.</p>
          <div className="intro-img-container">
            <img src={HarViewerNoBorder} alt="amazon project sketch 1" style={{ width: 580 }} />
          </div>
        </div>

        <div className="header-container sections" style={{ boxShadow: 'none', paddingBottom: 0 }}>
          <p>
            <div className="section-header">Links</div>
            <a href={headerSections.links[0].url} target="_blank" rel="noreferrer">{headerSections.links[0].label}</a>
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
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Overview</AnimatedHeader>
          <p>As developers, we often face challenges of fixing a client-reported performance issue where the only hint to finding the cause is the client’s brief description. My intern project at Amazon focuses on helping developers overcome such challenges by building an HTTP analyzer called the Har Viewer that allows developers to trace back the steps that have led to the error. With the Har Viewer, developers can easily pinpoint the source of the traffic issue and quickly help the clients fix their problems. </p>
        </div>

        <div className="design-process content-container problem-statement">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Problem Statement</AnimatedHeader>
          It is time-consuming and sometimes impossible for developers to pinpoint the cause of a client-reported performance issue so they need a way to quickly reproduce and trace errors on the client-side.
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Ideation</AnimatedHeader>
          <p>To determine the necessary features to include in the design, I interviewed a few programmers on the team to get a sense of the problems they face when resolving customer tickets.</p>

          <h3>Problems</h3>
          <ul>
            <li>Customers do not provide enough information to help programmers pinpoint the cause of the problem.</li>
            <li>Unable to reproduce performance problems on the client-side because they may be affected by many factors.</li>
          </ul>
          <h3>The Solution</h3>
          <p>From the two problems I identified, it is clear that programmers need a way to trace the steps taken by the customers on the client-side to correctly identify and analyze a performance issue.</p>
          <p><b>Therefore, the plan is to build an HTTP analyzer called the Har Viewer that collects API response data and timing data upon user actions on the client-side.</b> The Har Viewer allows users to retrieve data within a specific time range for a specific client. Each API data includes information, such as status code, error message, start time, and end time, that would give developers more context and help them identify any unusual cases.</p>

        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Design</AnimatedHeader>
          <p>As a show of concept, I first drew a sketch of the tool to get a sense of how the pieces would fit together in the view. According to the user interviews, some essential features of the tool include:</p>
          <ul>
            <li>
              Input fields for specifying a <b>customer id</b> and a <b>start time</b> for the search.
            </li>
            <li>
              A list of <b>API call names and details</b> in the search result.
            </li>
            <li>
            A <b>waterfall chart</b> to visualize the time elapsed for all API calls in the search result.
            </li>
          </ul>
          <div className="indent-container indent-image">
            <img src={Sketch1} alt="amazon project sketch 1" style={{ width: 500 }} />
          </div>
          <div className="caption small-indent">Concept Sketch (First Version)</div>
          <p style={{ marginTop: '6em' }}>
            From user testing, I learned that it would be helpful to make the visualization interactive so that users could have more flexibility when searching for API information. Therefore, I changed the API list into a table, which displays some API details and the corresponding timing visualization side-by-side for more readability. 
          </p>
          <div className="indent-container indent-image">
            <img src={Sketch2} alt="amazon project sketch 2" style={{ width: 650 }} />
          </div>
          <div className="caption">Concept Sketch (API Table)</div>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Development</AnimatedHeader>
          <h3>To Collect API Metrics...</h3>
          <div className="center small-indent diagram" style={{ marginTop: '2em' }}>
            <img src={Workflow1} alt="workflow structure" style={{ width: 450 }} />
          </div>
          <p>I added instrumentation on the <b>RDS Console SDK</b> to collect two types of metrics for each API call:</p>
          <div className="metric-list">
            <div>
              <div className="header">Timing Data</div>
              <ul>
                <li>This type of data is collected whenever an API call gets triggered, which includes the start time, end time, and time elapsed to help developers quickly identify any slow loads. </li>
                <li>The instrumentation gets called at 30-second intervals to accurately capture the time taken for each API call to complete.</li>
                <li>A unique Id is generated for each API call in order to match the timing data with the corresponding respose data.</li>   
              </ul>
            </div>
            <div>
              <div className="header">Response Data</div>
              <ul>
                <li>This type of data is collected upon completion of each API call, including information such as API name, HTTP status code, error message, etc. that helps developers understand what happened during the API call.</li>
                <li>Once both timing and response data are collected for an API call, the complete <b>log data schema</b> is sent off to be stored in the <b>Logging Service's database</b>.</li>
              </ul>
            </div>
          </div>

          <h3>To Retrieve API Metrics...</h3>
          <div className="center small-indent diagram" style={{ marginTop: '2em' }}>
            <img src={Workflow2} alt="workflow structure" style={{ width: 600 }} />
          </div>
          <ul>
            <li>I used <b>Athena Glue</b> to filter and copy data from <b>Logging Service</b> to our own database periodically. </li>
            <li>When user starts a search with the <b>Har Viewer Interface</b>, the <b>Athena query API</b> is triggered to fetch the stored API data from our own database.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="break-block" style={{ backgroundColor: '#232F3E' }}>
          <AnimatedHeader style={{
            margin: 0, color: 'white', marginBottom: 40, textTransform: 'uppercase',
          }}
          >
            The Final Product
          </AnimatedHeader>
          <img src={HarViewer} alt="har viewer" style={{ width: 700 }} />
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#D3D7DB' }}>
          <div className="content-container har-viewer-container center">
            <h2>Simple Interface</h2>
            <Image
              src={HarViewerError}
              alt="har viewer error"
              style={{ width: 750 }}
              label="Har Viewer"
            />
            <p style={{ marginTop: '3em' }}>With three simple steps, users can easily retrieve and analyze client-side traffic. The minimalist interface gives clear indication of what information is needed and how to start searching without giving any written instructions.</p>
            
            <div className="divider" />
            
            <h2>Interactive Waterfall Chart</h2>
            <div className="image-container">
              <Image
                src={HarViewerChart}
                alt="har viewer chart"
                style={{ width: 700 }}
                label="Waterfall Chart"
              />
              <Image
                src={HarViewerHover}
                alt="har viewer chart hover"
                style={{ width: 300 }}
                label="Waterfall Chart on Hover"
              />
            </div>
            <p style={{ marginTop: '5em' }}>Inspired by Chrome’s Network tab under inspect, I included a waterfall chart in the search results that correspond to the API data displayed. This visualization allows users to compare the API timings side-by-side to quickly identify any API call that took longer than others.</p>
            <p>By selecting an area in the chart, users can zoom in and out to investigate only the API calls triggered within the selected time frame. When users hover on any bar in the waterfall chart, the timing information for the corresponding API shows up as a tooltip to make information more accessible for users.</p>
            
            <div className="divider" />
            <h2>Customizable Table</h2>
            <Image
              src={HarViewerDetail}
              alt="har viewer error"
              style={{ width: 750 }}
              label="API Metrics Table"
            />
            <p style={{ marginTop: '5em' }}>The table provides detailed information for each API call in an organized and easy-to-interpret way. Users can easily compare the same types of information for different API calls in the same column to identify any outliers that may have caused the performance problem.</p>
            <p style={{ marginBottom: '5em' }}>The last column of the table shows a small waterfall visualization for quick reference. To allow more customization, the data in the table changes dynamically as users select different ranges of the waterfall chart.</p>
          </div>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Reflection</AnimatedHeader>
          <p>The most important skill I learned from this internship experience was time management. I was on a tight schedule to build this tool from scratch because I was unfamiliar with the technology and the codebase. I spent a lot of time developing the perfect development plan to make sure I could finish on time.</p>
          <p>However, many unexpected situations occurred during the process and I was forced to quickly adapt to the changes and find alternative solutions. The largest challenge was to revert three weeks of work because of some external factors unrelated to my project. This created a huge gap in my schedule so I needed to quickly respond to the sudden change to keep everything on the same track.</p>
          <p style={{ marginBottom: '8em' }}>I immediately contacted my mentor and project manager to come up with alternative ways to implement the feature. From their kind suggestions, I set up meetings with other service teams to discuss the possibility of integrating with my tool to speed up the implementation process. At the end of the internship, I successfully presented my finished product to the whole team without any regrets.</p>

          <p>
            <div className="feedback-section">
              During her Internship, I can see Ally is very hardworking and willing to learn new knowledge. Whenever she encounters a problem, she would try her best to find the solution by herself first. And after she solves the issue, she will also think more about other similar situations to enhance her understanding. I like the way she deals with problems. She is not just focused on current issues but trying to establish a better understanding of the whole framework.
              <div className="quote-source">--- Jingyi (Mentor)</div>
            </div>
          </p>
        </div>

        <ProjectFooter
          previous="core-platform"
          next="basic-needs"
        />
      </div>
    );
  }
}

export default AmazonInternship;
