import React, { Component } from 'react';

class Explore extends Component {
  render() {
    return (
      <div className="Explore">
        <h3>Explore Airbnbn</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <img className='explore-image' src='https://www.petakids.com/wp-content/uploads/2015/11/Baby-Bunny.jpg' />
              <span className='explore-home'>Homes</span>
            </div>
            <div className='col-sm'>
              <img className='explore-image' src='https://www.petakids.com/wp-content/uploads/2015/11/Baby-Bunny.jpg' />
              <span>Experiences</span>
            </div>
            <div className='col-sm'>
              <img className='explore-image' src='https://www.petakids.com/wp-content/uploads/2015/11/Baby-Bunny.jpg' />
              <span>Restaurants</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;