import React from 'react';
import toronto1 from '../images/carousel-sources/toronto1.jpg';
import toronto2 from '../images/carousel-sources/toronto2.jpg';
import toronto4 from '../images/carousel-sources/toronto4.jpg';
import toronto3 from '../images/carousel-sources/toronto3.jpg';
import montreal1 from '../images/carousel-sources/montreal1.jpg';
import montreal2 from '../images/carousel-sources/montreal2.jpg';


function Carousel() {
    return (

        <div id="caruselos">
    <div className="container">
    <div className="row">
    <div id="carouselExampleControls" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
      
      
      
      <div className="carousel-inner">
        <div className="carousel-item active">
      <div className="row">
      <div className="col-lg-4 onecol">
          <img className="d-inline-block w-100" src={toronto1} alt="Toronto Skyline" />
        </div>
        <div className="col-lg-4 onecol">
        <img className="d-inline-block w-100" src={toronto2} alt="Toronto Skyline 2" />
        </div>
        <div className="col-lg-4 onecol">
        <img className="d-inline-block w-100" src={toronto4} alt="Toronto Skyline night" />
        </div>
        </div>
        </div>
        <div className="carousel-item">
      <div className="row">
      <div className="col-lg-4 onecol">
          <img className="d-inline-block w-100" src={toronto3} alt="Toronto Skyline 3" />
        </div>
        <div className="col-lg-4 onecol">
        <img className="d-inline-block w-100" src={montreal1} alt="Montreal Skyline 1" />
        </div>
        <div className="col-lg-4 onecol">
        <img className="d-inline-block w-100" src={montreal2} alt="Montreal Skyline 2" />
        </div>
        </div>
        </div>
        <div className="carousel-item">
          <div className="row">
        <div className="col-lg-4 onecol" >
              <img className="d-inline-block w-100" src={"../images/carousel-sources/calgary.jpg"} alt="Calgary Skyline" />
          </div>
          <div className="col-lg-4 onecol">
            <img class="d-inline-block w-100" src={"../images/carousel-sources/edmonton.jpg"} alt="Edmonton Skyline" />
          </div>
          <div className="col-lg-4 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/vancouver.jpg"} alt="Vancouver Skyline" />
          </div>
        </div>
        </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-lg-4 onecol" >
            <img className="d-inline-block w-100" src={"../images/carousel-sources/bear1.jpg"} alt="Bear" />
          </div>
          <div className="col-lg-4 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/cougar.jpg"} alt="Cougar" />
          </div>
          <div className="col-lg-4 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/moose.jpg"} alt="Moose" />
          </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
          <div className="col-lg-4 onecol" >
            <img className="d-inline-block w-100" src={"../images/carousel-sources/niagara-falls.jpg"} alt="Niagara Falls" />
          </div>
          <div className="col-lg-4 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/ontario-fishing.jpg"} alt="Ontario Fishing" />
          </div>
          <div className="col-lg-4 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/ice-fishing.jpg"} alt="Ice Fishing" />
          </div>
        </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    
    <div id="carouselExampleControlsSmallScreen" className="carousel carousel-dark slide d-md-block d-lg-none" data-bs-ride="carousel">
        
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="row">
        <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/toronto1.jpg"} alt="Toronto Skyline" /> 
          </div>		  
          </div>
          </div>
    
          <div className="carousel-item">
          <div className="row">
          <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/toronto2.jpg"} alt="Toronto Skyline 2" />
          </div>
          </div>
          </div>
    
          <div className="carousel-item">
          <div className="row">
          <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/toronto4.jpg"} alt="Toronto Skyline night" />
          </div>
          </div>
          </div>
    
          <div className="carousel-item">
          <div className="row">
          <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/toronto3.jpg"} alt="Toronto Skyline 3" /> 
          </div>
          </div>
          </div>
    
    
          <div className="carousel-item">
            <div className="row">
          <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/montreal1.jpg"} alt="Montreal Skyline" />
          </div>
          </div>
          </div>
    
          <div className="carousel-item">
            <div className="row">
          <div className="col-sm-12 onecol">
          <img className="d-inline-block w-100" src={"../images/carousel-sources/montreal2.jpg"} alt="Montreal Skyline 2" />
          </div>
          </div>
          </div>
    
    
          <div className="carousel-item">
            <div className="row">
          <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/calgary.jpg"} alt="Calgary Skyline" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">	
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/edmonton.jpg"} alt="Edmonton Skyline" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/vancouver.jpg"} alt="Vancouver Skyline" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/bear1.jpg"} alt="Bear" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/cougar.jpg"} alt="Cougar" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/moose.jpg"} alt="Moose" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/niagara-falls.jpg"} alt="Niagara Falls" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/ontario-fishing.jpg"} alt="Ontario Fishing" />
            </div>
            </div>
            </div>
    
            <div className="carousel-item">
              <div className="row">
            <div className="col-sm-12 onecol">
            <img className="d-inline-block w-100" src={"../images/carousel-sources/ice-fishing.jpg"} alt="Ice Fishing" />
            </div>
            </div>
            </div>
         
        </div>
    
        <a className="carousel-control-prev" href="#carouselExampleControlsSmallScreen" role="button" data-bs-target="#carouselExampleControlsSmallScreen" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControlsSmallScreen" role="button" data-bs-target="#carouselExampleControlsSmallScreen" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </a>
    </div>
    
    </div>
    </div>
    </div>








    )
}

export default Carousel;