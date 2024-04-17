import React from 'react';
import herobackground from '../images/hero.v.3.png';

function Hero() {
    return(
        <div className="heroback">
        <div className="content">
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-2 offset-md-2 offset-sm-2 hero-text">
          <h1>Website of infos about CANADA</h1>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 hero-img">
        <img className="herobackground" src={herobackground} width="100%" alt="totonto skyline in day light" />
        </div>
  
        </div>  
        </div>
        </div>

    )
}

export default Hero;