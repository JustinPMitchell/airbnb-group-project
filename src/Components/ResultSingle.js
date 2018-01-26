import React, { Component } from 'react';

class ResultSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: ''
    }
  }


  componentWillMount() {
    var that = this;
    setTimeout(() => {
    var tags = [];
    tags.push(that.props.tags[Math.floor(Math.random() * 20)]);
    console.log('this is tags', tags, typeof tags);
    var newtags = tags[0]
    console.log('this is newtags', newtags.split(',')[Math.floor(Math.random() * 3)]);
    that.setState({ activity: this.props.country + ' ' + newtags.split(',')[Math.floor(Math.random() * 3)] })
  }, 6000); 
  }

  render() {
    return (
        <div className="ResultSingle">
              <img className='experience-image' src={this.props.image[Math.floor(Math.random() * 20)]}/>
              <div className='experience-text'>
                <h5>{this.state.activity}</h5>
                <h4>{this.props.tags[Math.floor(Math.random() * 20)]}</h4>
                <p>${Math.floor(Math.random() * 230)} per night</p>
                <p><img className='fivestar' src='http://www.chrisdingman.com/subliminal/wp-content/uploads/2015/10/5-stars-blue1.png' /> {Math.floor(Math.random() * 230)}</p>
              </div>
        </div>
    );
  }
}

export default ResultSingle;