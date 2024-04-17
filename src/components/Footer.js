import React from 'react';
import canflag from '../images/caflag.v2.png';

function Footer() {
    return (

        <footer className="ftr">
    
        <div className="container">
            
            <div className="row">
                <div className="col-sm-4">
                    <img src={canflag} alt="" class="img" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
                <div className="col-sm-4">
                    <h5>Office Hours</h5>
                    <ul>
                        <li>Mon - Friday 9:00 am - 7:00 pm</li>
                        <li>Sat - Sun 10:00 am - 2:00 pm</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <h5>Contact us</h5>
                    <ul>
                        <li>1234 Freedom Blvd</li>
                        <li>Toronto ON 12345</li>
                        <li>Canada</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="container copyright">
            <p>Copyright &copy; 2024 Marius Ionescu | All Rights Reserved</p>
        </div>
        
        
        
      </footer> 








    )
}

export default Footer;