import React, { Component } from 'react';
import ResultSingle from './ResultSingle.js';

class ResultBox extends Component {
  render() {
    return (
      <div className="ResultBox">
        <h3>Experiences</h3>
        <div className='container'>
          <div className='rowResult'>
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
          </div>
          <div className='rowResult'>
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
              <ResultSingle image={this.props.image} tags={this.props.tags} country={this.props.country} />
          </div>
        </div>
      </div>
    );
  }
}

export default ResultBox;