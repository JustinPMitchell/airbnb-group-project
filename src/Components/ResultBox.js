import React, { Component } from 'react';
import ResultSingle from './ResultSingle.js';

class ResultBox extends Component {
  render() {
    return (
      <div className="ResultBox">
        <h3>Experiences </h3>
        <div className='container'>
          <div className='row'>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
            <div className="col">
              <ResultSingle />
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default ResultBox;