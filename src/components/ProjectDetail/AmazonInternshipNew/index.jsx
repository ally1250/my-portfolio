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
        <div className="header-container" style={{ backgroundColor: '#232F3E' }}>
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
          {/* <AnimatedHeader style={{ color: '#df7931' }}>Background</AnimatedHeader> */}
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Problem Statement</AnimatedHeader>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Ideation</AnimatedHeader>
          <h3>Problem</h3>
          <h3>Solution</h3>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Design</AnimatedHeader>
          <div className="indent-container indent-image">
            <img src={Sketch1} alt="amazon project sketch 1" style={{ width: 500 }} />
          </div>
          <div className="caption small-indent">Concept Sketch (First Version)</div>
          <div className="indent-container indent-image">
            <img src={Sketch2} alt="amazon project sketch 2" style={{ width: 650 }} />
          </div>
          <div className="caption">Concept Sketch</div>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Development</AnimatedHeader>
          <h3>Collect API Metrics</h3>
          <div className="center small-indent diagram" style={{ marginTop: '2em' }}>
            <img src={Workflow1} alt="workflow structure" style={{ width: 450 }} />
          </div>
          <p>For each API call, I collected two types of metrics:</p>
          <div className="metric-list">
            <div>
              <div className="header">Timing Data</div>
              <p>add a list</p>
            </div>
            <div>
              <div className="header">Response Data</div>
              <p>add a list</p>
            </div>
          </div>

          <h3>Retrieve API Metrics</h3>
          <div className="center small-indent diagram" style={{ marginTop: '2em' }}>
            <img src={Workflow2} alt="workflow structure" style={{ width: 600 }} />
          </div>
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
            {/* <p>
              Upon opening the Har Viewer, users are given clear visual indicators of how to operate the tool. With three simple steps, users can now easily analyze client-side traffic and quickly resolve customer tickets.
              Given a customer ticket, users just need to copy over the account arn and the time when the ticket was submitted, and then click "Scan". The Har Viewer will search for all API metrics within the ten-minute range of
              the specified start time.
            </p> */}
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
            {/* <p>
              The search result contains an interactive waterfall chart that allows users to explore different time ranges more conveniently without having to search through the table of API metrics.
              By dragging and selecting an area in the chart, users can zoom in and out to investigate only the API calls triggered within the selected area. When users hover on any bar in the waterfall chart,
              the timing details for the corresponding API call will show as a tooltip.
            </p> */}
            <div className="divider" />
            <h2>Customizable Table</h2>
            <Image
              src={HarViewerDetail}
              alt="har viewer error"
              style={{ width: 750 }}
              label="API Metrics Table"
            />
            {/* <p>
              The purpose of the table is to provide detailed information for each API call in an organized and easy-to-interpret way. By displaying only the important API information in the table, such as status code and time elapsed, users could easily search through the table and filter out the information they want. Users can also look at the waterfall visualization in the last table to quickly identify API calls that are taking a long time and may have caused the client-side issue.
              If they need to look at other details for an API, they can click the API name in the first table column to open up a pop-up window with the complete metrics for that API.
            </p>
            <p>
              To allow more customization, the data in the table changes dynamically as users select different ranges of the waterfall chart.
            </p> */}

          </div>
        </div>

        <div className="design-process content-container">
          <AnimatedHeader style={{ textTransform: 'uppercase' }}>Reflection</AnimatedHeader>
          <p>To be added...</p>
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
