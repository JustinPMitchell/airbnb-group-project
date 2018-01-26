import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div class='Navbar'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img class="navbar-brand" src='http://logodatabases.com/wp-content/uploads/2017/06/airbnb_logo_small.png'/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-lg-2" type="search" placeholder="Try 'Split'" aria-label="Search" />
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Become a host</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Saved</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trips</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Messages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </nav>
            
      </div>
    );
  }
}

export default Navbar;