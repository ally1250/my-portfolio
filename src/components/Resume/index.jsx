import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Resume from '../../assets/Resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './index.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }

  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    const { pageNumber } = this.state;
    return (
      <div className="resume">
        <div className="header">
          Resume
        </div>
        <div className="resume-container">
          <Document
            file={Resume}
          >
            <Page
              pageNumber={pageNumber}
              width={400}
            />
          </Document>
          <div className="pdf-overlay">
            <a href={Resume} target="_blank" rel="noreferrer">open</a>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
