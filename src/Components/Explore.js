import React, { Component } from 'react';

class Explore extends Component {
  render() {
    return (
      <div className="Explore">
        <h2>Explore {this.props.country}</h2>
        <div className='container'>
          <div className='row justify-content-start'>
            <div className='col-3'>
              <img className='explore-image' src={this.props.image[Math.floor(Math.random() * 20)]} />
              <span className='explore-home'>Homes</span>
            </div>
            <div className='col-3'>
              <img className='explore-image' src={this.props.image[Math.floor(Math.random() * 20)]} />
              <span>Experiences</span>
            </div>
            <div className='col-3'>
              <img className='explore-image' src={this.props.image[Math.floor(Math.random() * 20)]} />
              <span>Restaurants</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;