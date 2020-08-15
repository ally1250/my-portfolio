import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { ReactComponent as Square } from '../../assets/square.svg';
import { ReactComponent as Triangle } from '../../assets/triangle.svg';
import { ReactComponent as TogetherApp } from '../../assets/together-app.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Rectangle } from '../../assets/rectangle.svg';
import { ReactComponent as Triangle2 } from '../../assets/triangle2.svg';

import RecodeWeb from '../../assets/recode-web.svg';
import UCSDApp from '../../assets/UCSD-app.svg';
import FoodDeliveryApp from '../../assets/food-delivery-app.svg';
import BirchSearchApp from '../../assets/birch-search-app.svg';

import data from '../../Data';
import './index.scss';

const Container = ({ children, style }) => (
  <div className="content-container" style={style}>
    {children}
  </div>
);

const ContentContainer = ({
  style, content, header, description, left, textStyle,
}) => (
  <div>
    {
      left
        ? (
          <div className="project-content-left" style={style}>
            {content}
            <div className="project-header-container" style={textStyle}>
              <div className="project-header-left">{header}</div>
              {description.map((item) => <div className="project-description">{item}</div>)}
            </div>
          </div>
        )
        : (
          <div className="project-content-right" style={style}>
            <div className="project-header-container" style={{ alignItems: 'flex-end', ...textStyle }}>
              <div className="project-header-right">{header}</div>
              {description.map((item) => <div className="project-description">{item}</div>)}
            </div>
            {content}
          </div>
        )
    }
  </div>
);

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="projects">
        <Container>
          <Fade bottom>
            <div className="header">
              My Recent Projects
            </div>
          </Fade>
        </Container>
        <Container>
          <Square className="content-left" />
          <ContentContainer
            style={{ left: '36vw', top: '-5vh' }}
            content={<TogetherApp />}
            textStyle={{ marginLeft: '4em', marginTop: '6em' }}
            header="Together - Fitness App"
            description={['User Research', 'UI/UX Design']}
            left
          />
        </Container>

        <Container>
          <Triangle className="content-right" />
          <ContentContainer
            style={{ right: '20vw', top: '30vh' }}
            content={<img src={RecodeWeb} alt="ReCode Website" />}
            header="CORE Platform Redesign"
            description={['UI/UX Design', 'React.js', 'Node.js']}
            textStyle={{ marginTop: '2em' }}
          />
        </Container>

        <Container style={{ marginTop: '6em' }}>
          <Circle className="content-left" />
          <ContentContainer
            style={{ left: '36vw', top: '8vh' }}
            content={<img src={UCSDApp} alt="UCSD Offical Application" />}
            header="UC San Diego Offical Application"
            description={['UI/UX Design', 'React.js', 'Node.js']}
            textStyle={{ marginLeft: '4em' }}
            left
          />
        </Container>

        <Container style={{ marginTop: '12em' }}>
          <Rectangle className="content-right" />
          <ContentContainer
            style={{ right: '19vw', top: 0 }}
            content={(
              <img
                src={FoodDeliveryApp}
                alt="Food Delivery Application"
                style={{ marginTop: '-10vh' }}
              />
            )}
            header="CORE Platform Redesign"
            description={['UI/UX Design', 'React.js', 'Node.js']}
            textStyle={{ marginTop: '2em' }}
          />
        </Container>

        <Container style={{ marginTop: '20em' }}>
          <Triangle2 className="content-left" />
          <ContentContainer
            style={{ left: '35vw', top: '-8vh' }}
            content={(
              <img
                src={BirchSearchApp}
                alt="Food Delivery Application"
              />
            )}
            textStyle={{ marginTop: '30vh' }}
            header="Birch Search Application"
            description={['UI/UX Design', 'React.js', 'Node.js']}
            left
          />
        </Container>
      </div>
    );
  }
}

export default Projects;
