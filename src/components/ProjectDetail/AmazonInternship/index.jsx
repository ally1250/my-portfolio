import React, { Component } from 'react';
import { ProjectHeaderSection, Footer, ProjectReflectionSection } from '../../common';
import Sketch1 from '../../../assets/amazonProject/sketch-1.png';
import Sketch2 from '../../../assets/amazonProject/sketch-2.png';
import Workflow1 from '../../../assets/amazonProject/amazon-workflow-1.png';
import Workflow2 from '../../../assets/amazonProject/amazon-workflow-2.png';
import HarViewer from '../../../assets/amazonProject/har-viewer.png';
import HarViewerError from '../../../assets/amazonProject/har-viewer-error.png';
import HarViewerDetail from '../../../assets/amazonProject/har-viewer-detail.png';
import HarViewerHover from '../../../assets/amazonProject/har-viewer-hover.png';
import HarViewerChart from '../../../assets/amazonProject/har-viewer-chart.png';

import { Image } from '../BasicNeeds';

import './index.scss';

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

class AmazonInternship extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="amazon-main">
        <ProjectHeaderSection
          header="Har Viewer - Amazon Internship"
          headerStyle={{ width: '10em' }}
          overviewSections={overview}
          headerSections={headerSections}
          problemStatement="Developers need a convenient way to learn about client-side activity in order to identify and analyze performance issues."
          solution="I created a tool that displays a detailed timeline view of network requests for production traffic, allowing users to check the details for each API call within a specified time period."
        />

        <div className="content-container narrow-contianer">

          <h2>Design Process</h2>

          <h3>Background Research</h3>
          <ul>
            <li>
              Consult mentor and project manager to learn about the resources available and suitable for the project.
            </li>
            <li>
              Set up meetings with other AWS service teams to discuss the details on working toward the objective of the project.
            </li>
            <li>
              Construct survey for engineers to understand their expectations and needs.
            </li>
          </ul>

          <h3>Understand User Workflow</h3>
          <p>
            After collecting techical and personal opinions about the tool, I developed a story board to help align the project objectives with user needs.
          </p>
          {/* <ul>
            <li>
              Create user stories:
            </li>
          </ul> */}
          <div className="indent-container small-indent">
            <ol className="indented-list">
              <li>Alice is a developer on the RDS console team. She is resolving a customer ticket that complains about a slow page load.</li>
              <li>Alice wants to know about how long the page load took to determine whether the delay in performance is caused by a slow internet connection or an actual server error.</li>
              <li>The load time is uncommonly long. Alice wants to get the detailed information and time elapsed for each API call triggered on the client-side, in order to find out which or if any API call has caused the delay.</li>
              <li>Alice finds that one API call took much longer than usual so she wants to find out if any error occurred during that API call.</li>
            </ol>
          </div>
          <p>
            From the above scenario, I determined a general workflow for the tool that applies to all use cases.
          </p>
          <div className="indent-container small-indent">
            <ol className="indented-list">
              <li>The user launches the Har Viewer and selects the service as RDS, environment, and region.</li>
              <li>The user enters the Customer Id in the search box, specifies a start time, and clicks "scan".</li>
              <li>The user now sees a list of all API calls within the ten-minute period after the start time, including the total load time in seconds, and the total number of API calls triggered by the page load.</li>
              <li>The user clicks on an API name to check the details and error message for that API call.</li>
            </ol>
          </div>

          <h3>Generate Ideas</h3>

          <p>
            As a show of concept, I first drew a sketch of the tool to get a sense of how the pieces would fit together in the view. According to the background research, some essential features of the tool include:
          </p>
          <ul>
            <i>
              <li>
                Input fields for specifying a
                {' '}
                <b>customer Id</b>
                {' '}
                and a
                {' '}
                <b>start time</b>
                {' '}
                for the search.
              </li>
              <li>
                A list of API call names and details within a time period after the specified start time.
              </li>
              <li>
                Some visualization for the search result (e.g. a waterfall chart).
              </li>
            </i>
          </ul>
          <p />
          <div className="indent-container indent-image">
            <img src={Sketch1} alt="amazon project sketch 1" style={{ width: 500 }} />
          </div>
          <div className="caption small-indent">Concept Sketch (First Version))</div>

          <p style={{ marginTop: '5em' }}>
            Furthermore, according to the user survey, it would be helpful to make the visualization interactive so that users could have more flexibiity when searching for API information. Therefore, I changed the API list into a table, which displays some API details and the corresponding visualization side-by-side for more readability.
            After selecting a certain time range in the waterfall chart at the top, the content in the table would change to show the API calls made within the selected time range. This allows users to customize the search result with ease.
          </p>
          <div className="indent-container indent-image">
            <img src={Sketch2} alt="amazon project sketch 2" style={{ width: 650 }} />
          </div>
          <div className="caption">Concept Sketch (Second Version)</div>
        </div>

        <div className="content-container narrow-contianer" style={{ marginBottom: 20 }}>
          <h2>Development Process</h2>
          <h3>Create a Design Document for Review</h3>
          <p>
            This design document is shared with permission by my mentor Jingyi Luo. Some information was removed for privacy protection.
            <a href="https://docs.google.com/document/d/1fi_lv-3GkB6cXRbZv-2gmjITDgHbVK04kgzBg5cApU0/edit?usp=sharing" style={{ display: 'block' }}>Open Design Document</a>
          </p>
          <h3>Collect API Metrics</h3>

          <div className="center small-indent" style={{ marginTop: '2em' }}>
            <img src={Workflow1} alt="workflow structure" style={{ width: 450 }} />
          </div>
          {/* <p>
            I needed to collect two types of API metrics: response data and timing data. I added instrumentation to the RDS SDK to collect response data upon each API call, including status code, error message, etc.
            To collect timing data, I used Resource Timing API to get the start time and end time for each API call. I then created a SDK wrapper for sending the collected data periodically to the logging service's database.
          </p> */}
          <ul>
            <li>Add instrumentation to collect response data upon each API call, including status code, error message, etc.</li>
            <li>Use Resource Timing API to collect timing data for each API call, such as start time and end time.</li>
            <li>Create a SDK wrapper for sending the collected API metrics to logging service's database.</li>
          </ul>

          <h3>Use the Collected Metrics</h3>
          <div className="center small-indent" style={{ marginTop: '2em' }}>
            <img src={Workflow2} alt="workflow structure" style={{ width: 600 }} />
          </div>
          <ul>
            <li>Set up an AWS Account to use Athena query API to fetch API call metrics from the database.</li>
            <li>Use Amazon Glue for querying the database periodically to keep the data live.</li>
            <li>Build the Har Viewer page in React.</li>
          </ul>
        </div>

        <div className="break-block">
          <h2 style={{ margin: 0, color: 'white', marginBottom: 40 }}>The Final Product</h2>
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
            <p>
              Upon opening the Har Viewer, users are given clear visual indicators of how to operate the tool. With three simple steps, users can now easily analyze client-side traffic and quickly resolve customer tickets.
              Given a customer ticket, users just need to copy over the account arn and the time when the ticket was submitted, and then click "Scan". The Har Viewer will search for all API metrics within the ten-minute range of 
              the specified start time.
            </p>
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
            <p>
              The search result contains an interactive waterfall chart that allows users to explore different time ranges more conveniently without having to search through the table of API metrics.
              By dragging and selecting an area in the chart, users can zoom in and out to investigate only the API calls triggered within the selected area. When users hover on any bar in the waterfall chart,
              the timing details for the corresponding API call will show as a tool tip.
            </p>
            <div className="divider" />
            <h2>Customizable Table</h2>
            <Image
              src={HarViewerDetail}
              alt="har viewer error"
              style={{ width: 750 }}
              label="API Metrics Table"
            />
            <p>
              The purpose of the table is to provide detailed information for each API call in a organized and easy-to-interpret way. By displaying only the important API information in the table, such as status code and time elapsed,
              users could easily search through the table and filter out the information they want. Users can also look at the waterfall visualization in the last table to quickly identify API calls that are taking a long time and may have caused the client-side issue.
              If they need to look at other details for an API, they can click the API name in the first table column to open up a pop up window with the complete metrics for that API.
            </p>
            <p>
              To allow more customization, the data in the table changes dynamically as users select different ranges of the waterfall chart.
            </p>

          </div>
        </div>

        <ProjectReflectionSection
          reflectionSections={[
            'The result of adding a feature to an existing design may look simple but the process of figuring out how to incorporate the new design with the predefined ones is difficult. Since the layout for notifications is fixed, I was given little flexibility to make changes to the original component. Therefore, to make the design intuitive to users, I spent a lot of effort exploring different approaches.',
          ]}
          feedbackSections={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque feugiat egestas metus neque. Orci consectetur eget est, purus tortor. Nunc, in felis cursus ornare malesuada vitae.',
          ]}
        />

        <Footer
          previous="amazon-internship"
          next="food-delivery"
        />

        {/* <div className="iterations-divider">
          <img src={IterationIcon} alt="iteration icon" />
          <h2 style={{ margin: 0, color: 'white', marginTop: 40 }}>Design Iterations</h2>
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#375368' }}>
          <div className="content-container iteration-container">
            <h2 className="iteration-header">Iteration 1</h2>
            <div className="iteration-img-layout">
              <Image
                src={DefaultV1}
                alt="default v1"
                label="Default State"
              />
              <Image
                src={RegisteredV1}
                alt="registered v1"
                label="Registered"
              />
              <Image
                src={UnregisteredV1}
                alt="unregistered v1"
                label="Unregistered"
              />
              <Image
                src={LimitExceededV1}
                alt="limit exceeded v1"
                label="RSVP Limit Exceeded"
              />
            </div>
            <div className="description-box">
              <ul>
                <li>Create two buttons to give users the flexibility to register andunregister for events.</li>
                <li>Use notification text to give users clear feedback on their actions.</li>
                <li>Disable the register button when RSVP count has reached the limit.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="design-iteration" style={{ backgroundColor: '#597489' }}>
          <div className="content-container iteration-container">

            <h2 className="iteration-header">Iteration 2</h2>
            <div className="iteration-img-layout">
              <Image
                src={DefaultV2}
                alt="default v2"
                label="Default State (Button)"
              />
              <Image
                src={RegisteredV2}
                alt="registered v2"
                label="Registered (Button)"
              />
              <Image
                src={LimitExceededV2}
                alt="limit exceeded v2"
                label="RSVP Limit Exceeded (Button)"
              />
            </div>
            <div className="iteration-img-layout" style={{ marginTop: '5em' }}>
              <Image
                src={DefaultToggle}
                alt="default toggle"
                label="Default State (Toggle)"
              />
              <Image
                src={RegisteredToggle}
                alt="registered toggle"
                label="Registered (Toggle)"
              />
            </div>
            <div className="description-box">
              Problems with the first prototype
              <ul>
                <li>Noitification text is not intuitive enough to tell which events are registered and which are not.</li>
                <li>The &quot;Maybe Not&quot; button is not necessary and may cause confusion.</li>
                <li>Disabled button is limiting and confusing.</li>
              </ul>
              <div style={{ height: '3em' }} />
              Solution
              <ul>
                <li>Combine the register and unregister buttons into a toogle button.</li>
                <li>Experimente with two approaches for representing the toggle button. The first approach is to use different colors to indicate the on and off states of the toggle button. The second approach directly uses a toggle for more clarity.</li>
                <li>Change the noitification text to show the current RSVP count to give users more context.</li>
                <li>When RSVP limit is reached, display a warning text to notify users that there may not be enough food, instead of disabling the button. This gives users more flexibility and control over their decisions.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#7A94A8' }}>
          <div className="content-container iteration-container">
            <h2 className="iteration-header">Final Iteration</h2>

            <div className="iteration-img-layout">
              <Image
                src={DefaultV3}
                alt="default v3"
                label="Default State"
              />
              <Image
                src={RegisteredV3}
                alt="registered v3"
                label="Registered"
              />
              <Image
                src={LimitExceededV3}
                alt="limit exceeded v3"
                label="RSVP Limit Exceeded"
              />
            </div>
            <div className="description-box">
              Problems with the second prototype
              <ul>
                <li>The team likes the idea of changing button color to indicate its state. However, users may not know which colors correspond to registered and unregistered.</li>
                <li>The gray background is not a good indicator of the intial state for the toggle button. Users may confuse the gray color for a disabled button instead of an active button.</li>
              </ul>
              Solution
              <ul>
                <li>Add a check box inside the toggle button to help users quickly and easily understand the button state.</li>
                <li>Change the initial state to be an outlined button with an unchecked check box. This is a clearer indication for users that the button is in its off state and is pressable.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="content-container" style={{ marginBottom: 20 }}>
          <h2>Development Process</h2>
          <h3>Create Backend Architecture</h3>
          <div className="center small-indent" style={{ marginTop: '2em' }}>
            <img src={BasicNeedsStructure} alt="workflow structure" style={{ width: 600 }} />
          </div>
          <p>
            Before diving into the implementation, I created a workflow diagram
            and a design document
            to help configure the backend structure.
            I made sure that the tools are reusable and compatible
            for the intergation of other campus events in the future.
          </p>
          <div className="indent-container">
            <img src={BasicNeedsWorkflow} alt="basic needs workflow" style={{ width: 730 }} />
          </div>
          <div className="caption">Backend Workflow Diagram</div>
          <h3>Develop Client Side</h3>
          <ul>
            <li>Implement the design in Flutter.</li>
            <li>Store user&apos;s attendance information in local storage.</li>
            <li>Integrate AWS API endpoints to retrieve and update attendance data.</li>
          </ul>

          <h3>Create a detailed checklist for testing</h3>
          <h3>Submit the final pull request for review and deploy to production</h3>
        </div>

        <div className="divider" />

        <ProjectReflectionSection
          reflectionSections={[
            'The result of adding a feature to an existing design may look simple but the process of figuring out how to incorporate the new design with the predefined ones is difficult. Since the layout for notifications is fixed, I was given little flexibility to make changes to the original component. Therefore, to make the design intuitive to users, I spent a lot of effort exploring different approaches.',
          ]}
          feedbackSections={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque feugiat egestas metus neque. Orci consectetur eget est, purus tortor. Nunc, in felis cursus ornare malesuada vitae.',
          ]}
        /> */}

        {/* <Footer
          previous="amazon-internship"
          next="food-delivery"
        /> */}
      </div>
    );
  }
}

export default AmazonInternship;
