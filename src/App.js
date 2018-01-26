import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Explore from './Components/Explore.js';
import ResultBox from './Components/ResultBox.js';
import ResultSingle from './Components/ResultSingle.js';
import Search from './Components/Search.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrls: [],
      tags: [],
      country: '',
      loading: true
    }

    this.generateRandomCity = this.generateRandomCity.bind(this);
  }
  /*//use battuta to generate a random country name using 2 letters*/

  /*use wikipedia api call to generate images using the results of the battuta api call*/

  generateRandomCity() {

    //const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    const battutaUrl = 'https://battuta.medunes.net/api/country/all/?key=2fecff792f5d92ca30ef0c64c4606393';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var randomNumberBattutaUrl = Math.floor(Math.random() * 230);
    var country = '';
    var imageUrl = '';
    var tagsCurrent = '';

    console.log('this is random number ', randomNumberBattutaUrl);

    // fetch did not work while heroku proxy's it, sometimes doesn't work for a few minutes
    // ref: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141
    fetch(proxyurl + battutaUrl, {mode: 'cors'}).then(response => {
      response.json().then(data => {
        console.log(data[randomNumberBattutaUrl].name);
        country = data[randomNumberBattutaUrl].name;
        that.setState({ country: country })
      })
    })

    var that = this;

    setTimeout(
      function(){
        fetch('https://pixabay.com/api/?key=7831556-7d046e1156b3ad7975e0bad5f&q=' + country + '&image_type=photo', {mode: 'cors'}).then(function(resp) {
            console.log(resp);
            return resp.json()
        }).then(function(data) {
            console.log('this is data ', data.hits[0].tags);
            that.setState({ tags: data.hits[0].tags })
            
            var tagsarray = [];
            for (var i = 0; i < data.hits.length; i++) {
              imageUrl = data.hits[i].webformatURL;
              tagsCurrent = data.hits[i].tags;
              var arrayvar = that.state.imageUrls.slice();

              console.log('this is ', i, ' time, this is arrayvar', arrayvar, 'this is tagsarray', tagsarray);
              console.log("TAGSARRAY: ", tagsarray)
              arrayvar.push(imageUrl);
              tagsarray.push(tagsCurrent);
              that.setState({ imageUrls: arrayvar, tags: tagsarray })
            }
        })


        console.log('this is the url ', imageUrl); 
      }, 3000
    );

    setTimeout( 
      function(){
        console.log('second timeout works');
        that.setState({ loading: false });
      }, 6000)
    return imageUrl;
  }



  componentWillMount() {
    this.generateRandomCity();
  }

  render() {
    if(this.state.loading) {
      return(
        <div className='loading-container'>
          <img className='loading' src='https://media.giphy.com/media/yoJC2K01KzhoUYgiRy/giphy.gif' />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Navbar />
          <div className='body-container'>
            <Explore image={this.state.imageUrls} country={this.state.country} />
            <ResultBox image={this.state.imageUrls} tags={this.state.tags} country={this.state.country} />
            <Search image={this.state.imageUrls} tags={this.state.tags} country={this.state.country} />
          </div>
        </div>
      );
    }
  }
}

export default App;
