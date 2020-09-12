import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { Navigation } from '../../common';
import './index.scss';

const CONCENTRATION = [
  {
    id: '0Byc1w2Nl1Z-CUzJ1cTNURmNBa00',
    caption: 'Perception',
  },
  {
    id: '0Byc1w2Nl1Z-CaTFZZGxZZU1vQ0E',
    caption: 'Perspective',
  },
  {
    id: '0Byc1w2Nl1Z-CVXY4RkNCQmRhM2M',
    caption: 'Imagination',
  },
  {
    id: '0Byc1w2Nl1Z-CN1k2bWVuTHJ5anM',
    caption: 'Dominance',
  },
  {
    id: '0Byc1w2Nl1Z-CbnFwdV9BZjFyQ1U',
    caption: 'Opportunity',
  },
  {
    id: '0Byc1w2Nl1Z-CbnEwWkMyd2lDT2M',
    caption: 'Support',
  },
  {
    id: '0Byc1w2Nl1Z-CN1p2dmQ2OWd1WlE',
    caption: 'Exploration',
  },
  {
    id: '0Byc1w2Nl1Z-CNVh6MmsxV3ZCWW8',
    caption: 'Depression',
  },
  {
    id: '1Rxi0LjsuiiqneTnlBaMDtxMmGApNCAKX',
    caption: 'Compassion',
  },
  {
    id: '0Byc1w2Nl1Z-CSk00NlRWcDRudnc',
    caption: 'Breakthrough',
  },
  {
    id: '0Byc1w2Nl1Z-CODlybm9JdlBXZWs',
    caption: 'Immersion',
  },
];

const DESIGN = [
  {
    id: '0Byc1w2Nl1Z-CLTVGYXh3emZISFk',
    caption: 'Texture1 - Waves',
  },
  {
    id: '1zvidaZWXyh7mAIb0Ocss2gbXdBNaLMfp',
    caption: 'Texture2 - The Beach',
  },
  {
    id: '0Byc1w2Nl1Z-CUFdtakZpNTdmdnM',
    caption: 'Texture3 - Waterfall',
  },
  {
    id: '1C9b-t346fMfH8ADS2j9VY4wBFPa0B3HA',
    caption: 'Texture4 - Rain on a Window',
  },
  {
    id: '0Byc1w2Nl1Z-CcklvMjBLaFR2Q3M',
    caption: 'Lines1 - Seagull',
  },
  {
    id: '0Byc1w2Nl1Z-CdW56YzlnQmxTYkk',
    caption: 'Lines2 - Lily',
  },
  {
    id: '0Byc1w2Nl1Z-CMjgyX2VUOFVzd28',
    caption: 'Light - A Person',
  },
  {
    id: '0Byc1w2Nl1Z-CaENMd3R1MFRHOWc',
    caption: 'Paper Texture - Flowers',
  },
  {
    id: '0Byc1w2Nl1Z-CU3VEbGp1STJ4Uk0',
    caption: 'Contrast - Shattered Glass',
  },
  {
    id: '0Byc1w2Nl1Z-CM0MzSmcyTkJJYTQ',
    caption: 'Composition - The Mountains',
  },
];

const BOOK = [
  {
    id: '1_thEWAyX1cZmKfR6c56j2a_Yg-WFVHs6',
    caption: '"Who Controls the Past Controls the Future"',
  },
  {
    id: '1wr8rywHdmzUSWeFiAQAIN_0eCWLmxUVB',
    caption: '"War is Peace. Freedom is Slavery. Ignorance is Strength."',
  },
  {
    id: '1FsiLhKJIC4dx6tOgJp_bVlXeamIlBLhx',
    caption: '"2+2=5"',
  },
];

const POSTERS = [
  {
    id: '1xiMpZFvzkuNbMDvuBPWl2IyI4kr3mLww',
  },
  {
    id: '16xmVZaw21GFyVbK2AT0Ou3cglUx9Gtnu',
  },
  {
    id: '1LqMwiXXTdozB72NXMlXcM3CH_EWpSOuv',
  },
];

const navigations = [
  {
    to: 'hands',
    label: 'Hands',
  },
  {
    to: 'design',
    label: 'Design',
  },
  {
    to: '1984',
    label: '1984',
  },
  {
    to: 'posters',
    label: 'Posters',
  },
];

const formatImages = (images) => (
  images.reduce((arr, obj) => {
    arr.push(
      {
        src: `http://drive.google.com/uc?export=view&id=${obj.id}`,
        thumbnail: `http://drive.google.com/uc?export=view&id=${obj.id}`,
        caption: obj.caption,
        // thumbnailWidth: obj.thumbnailWidth,
        // thumbnailHeight: obj.thumbnailHeight,
      },
    );
    return arr;
  }, [])
);

class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Navigation
          navigations={navigations}
          style={{
            backgroundColor: 'transparent', color: 'white', width: 100, fontWeight: 300,
          }}
          linkStyle={{ color: 'white', fontWeight: 300 }}
        />
        <div className="main-content">
          <div className="hands">
            <div className="title">HANDS</div>
            <div className="container">
              <p>
                The agility and flexibility of hands allow people to compose gestures. These gestures, sometimes unconscious, are reflections of one's thoughts and feelings. Through my art pieces, I wanted to convey that
                {' '}
                <b>hands are emotional</b>
                {' '}
                with the use of color, lines, and composition in both 2D and 3D.
              </p>
              <Gallery
                images={formatImages(CONCENTRATION)}
                backdropClosesModal
                enableImageSelection={false}
                rowHeight={230}
                margin={8}
              />
            </div>
          </div>

          <div style={{ height: 100, width: '100%' }} />
          <div className="design">
            <div className="title" style={{ color: '#25304A' }}>DESIGN</div>
            <div className="container" style={{ backgroundColor: '#25304A' }}>
              <p>
                The following set of art pieces does not have a specific topic. I constructed each of them from components in my daily life, hoping to illustrate a different world from my unique perspective.
              </p>
              <Gallery
                images={formatImages(DESIGN)}
                backdropClosesModal
                enableImageSelection={false}
                rowHeight={230}
                margin={8}
              />
            </div>
          </div>

          <div style={{ height: 100, width: '100%' }} />
          <div className="1984">
            <div className="title" style={{ color: '#343434' }}>1984</div>
            <div className="container" style={{ backgroundColor: '#343434' }}>
              <p>
                This set of art pieces were inspired by the book
                {' '}
                <i><b>1984</b></i>
                . The book reveals the corrupted side of society where human beings are taken over by violence and greed. While reading the book, I pictured a society where truths become lies, justice turns into guilt, trust transforms into betrayal, and love leads to hatred.
                To express this convoluted feeling, I created the following art pieces from three of my most memorable concepts in the book.
              </p>
              <Gallery
                images={formatImages(BOOK)}
                backdropClosesModal
                enableImageSelection={false}
                rowHeight={270}
                margin={8}
              />
            </div>
          </div>

          <div style={{ height: 100, width: '100%' }} />
          <div className="posters">
            <div className="title" style={{ color: '#a68c77' }}>POSTERS</div>
            <div className="container" style={{ backgroundColor: '#a68c77' }}>
              <p>
                The following are some posters I created for a design class. The task was to construct posters with different organizations of the same text, using only the images provided. I enjoyed playing with different colors and fonts to make the posters look synchronized.
              </p>
              <Gallery
                images={formatImages(POSTERS)}
                backdropClosesModal
                enableImageSelection={false}
                rowHeight={270}
                margin={8}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
