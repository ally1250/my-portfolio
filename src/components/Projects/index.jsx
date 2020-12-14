import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { Header, Container } from '../common';
import { ReactComponent as DesignerIcon } from '../../assets/designer-icon.svg';
import { ReactComponent as DeveloperIcon } from '../../assets/developer-icon.svg';
import { ReactComponent as Square } from '../../assets/square.svg';
import { ReactComponent as Triangle } from '../../assets/triangle.svg';
import { ReactComponent as TogetherApp } from '../../assets/together-app.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as LargeCircle } from '../../assets/large-circle.svg';
import { ReactComponent as Triangle3 } from '../../assets/triangle3.svg';
import { ReactComponent as Rectangle } from '../../assets/rectangle.svg';
import { ReactComponent as StraightTriangle } from '../../assets/straight-triangle.svg';
import { ReactComponent as DiamondButton } from '../../assets/diamond-button.svg';

import RecodeWeb from '../../assets/recode-web.png';
import Test from '../../assets/test.svg';
import BirchSearchApp from '../../assets/birch-search-app.svg';
import AmazonProject from '../../assets/amazon-project.png';
import MFP from '../../assets/MFPChallenge.png';

import UCSDApp from '../../assets/basic-needs-app.png';

import './index.scoped.scss';

const renderDescription = (description) => {
  if (description) return description.map((item) => <div className="description-item">{item}</div>);
  return <div />;
};

const renderRole = (design, develop) => (
  <div style={{ marginBottom: '0.2em' }}>
    <div className="label">
      {design ? 'Design' : ''}
      {develop && design ? ' & ' : ''}
      {develop ? ' Development ' : ''}
    </div>
  </div>
);

const ContentContainer = ({
  style, content, header, description, left, textStyle, develop, design, onClick,
}) => (
  <div className="project-content-container" onClick={onClick}>
    {left
      ? (
        <div className="project-content" style={style}>
          {content}
          {/* <Fade bottom> */}
          <div className="project-header-container" style={textStyle}>
            {renderRole(design, develop)}
            <div className="project-header-left">{header}</div>
            <div style={{ textAlign: 'start' }}>
              {renderDescription(description)}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      )
      : (
        <div className="project-content" style={style}>
          <div className="project-header-container" style={{ alignItems: 'flex-end', ...textStyle }}>
            {renderRole(design, develop)}
            <div className="project-header-right">{header}</div>
            <div style={{ textAlign: 'end' }}>
              {renderDescription(description)}
            </div>
          </div>
          {content}
        </div>
      )}
  </div>
);

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSelectProject = (topic) => {
    const { history } = this.props;
    history.push(`/${topic}`);
  }

  openPortfolio = () => {
    const { history } = this.props;
    history.push('/art');
  }

  render() {
    return (
      <div className="projects">
        <Header header="My Recent Projects" />

        <Container>
          <LargeCircle className="content-left" />
          <ContentContainer
            style={{ left: '19vw', top: '15vh' }}
            textStyle={{ marginLeft: '2em', marginTop: '-3em' }}
            content={(
              <img
                src={RecodeWeb}
                alt="ReCode Website"
                style={{ width: 440 }}
              />
            )}
            header="The CORE Platform Redesign"
            develop
            design
            description={['UI/UX Design', 'Communication', 'Agile Software Development', 'React.js']}
            left
            onClick={() => this.onSelectProject('core-platform')}
          />
        </Container>

        <Container style={{ marginTop: '6em' }}>
          <Triangle className="content-right" />
          <ContentContainer
            style={{ right: '20vw', top: '25vh' }}
            content={(
              <img
                src={AmazonProject}
                alt="Amazon Project"
                style={{ width: 440 }}
              />
            )}
            textStyle={{ marginTop: '4em', marginRight: '3em' }}
            header="The Har Viewer"
            design
            develop
            description={['UI/UX Design', 'React.js', 'AWS']}
            onClick={() => this.onSelectProject('amazon-internship')}
          />
        </Container>

        <Container style={{ marginTop: '15em', marginRight: '10em' }}>
          <Circle className="content-left" />
          <ContentContainer
            style={{ left: '34vw', top: '2.5em' }}
            textStyle={{ marginLeft: '4em', marginTop: '-1em' }}
            content={<img src={UCSDApp} alt="UCSD Offical Application" style={{ width: 155 }} />}
            header="UC San Diego Offical Application"
            develop
            design
            description={['UI/UX Design', 'Communication', 'Flutter', 'AWS']}
            left
            onClick={() => this.onSelectProject('basic-needs')}
          />
        </Container>

        <Container style={{ marginTop: '15em', marginLeft: '10em' }}>
          <Triangle3 className="content-right" />
          <ContentContainer
            style={{ right: '45vw', top: '6em' }}
            textStyle={{ marginLeft: '4em', marginTop: '-1em' }}
            content={<img src={MFP} alt="MFP" style={{ width: 155 }} />}
            header="MyFitnessPal Redesign"
            design
            description={['User Research', 'UI/UX Design', 'Communication']}
            onClick={() => this.onSelectProject('mfp-redesign')}
          />
        </Container>

        {/* <Container style={{ marginTop: '20em', marginLeft: '5em' }}>
          <Rectangle className="content-right" />
          <ContentContainer
            style={{ right: '17vw', top: '-2.5em' }}
            content={(
              <img
                src={Test}
                alt="Food Delivery Application"
                // style={{ marginTop: '-10vh' }}
              />
            )}
            header="Food Delivery System"
            develop
            design
            description={['UI/UX Design', 'Communication', 'React Native', 'MongoDB']}
            textStyle={{ marginTop: '4em', marginRight: '4em' }}
          />
        </Container>

        <Container style={{ marginTop: '10em' }}>
          <StraightTriangle className="content-left" />
          <ContentContainer
            style={{ left: '32vw', top: '17vh' }}
            content={(
              <img
                src={BirchSearchApp}
                alt="Birch Search Application"
              />
            )}
            textStyle={{ marginTop: '15vh', marginLeft: '4em' }}
            header="Birch Search Application"
            design
            description={['UI/UX Design', 'Stakeholder Research', 'User Testing']}
            left
          />
        </Container>

        <Container style={{ marginTop: '15em' }}>
          <Square className="content-right" />
          <ContentContainer
            style={{ right: '41vw', top: '-4.5vh' }}
            content={<TogetherApp />}
            textStyle={{ marginRight: '4em', marginTop: '5em' }}
            header="Together - Fitness App"
            design
            description={['User Research', 'Ideation', 'Prototyping']}
          />
        </Container>
        {/* <ParallaxProvider>
          <Parallax y={[-30, 30]}>
            <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black'}} />
          </Parallax>
        </ParallaxProvider> */}
        <Container style={{ marginTop: '25vh' }}>
          <div style={{ fontSize: 16, marginBottom: '2em' }}>
            I’m also interested in visual arts.
            <div style={{ color: 'black' }}>
              Check out some of my art pieces!
              <span role="img" aria-label="down" style={{ fontSize: 18 }}>👇</span>
            </div>
          </div>
          <div style={{ position: 'relative', width: 'fit-content' }} onClick={this.openPortfolio}>
            <DiamondButton style={{ width: '25vw' }} className="diamond-button" />
            <div className="button-label">
              <span role="img" aria-label="down" className="emoji" style={{ fontSize: 22 }}>🖼️ 🖼️ 🖼️</span>
              <div>Open Gallary</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default compose(withRouter)(Projects);
