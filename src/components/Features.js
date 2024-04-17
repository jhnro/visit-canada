import React from 'react';
import bear from '../images/bear.png';
import cougar from '../images/cougar.png';
import deer from '../images/deer.png';

function Features() {
    return (


<div id="features">
    <div className="container">

      <div className="row">
        <div className="feature-box col-lg-4">        
        <img src={bear} className="bear" alt="bear" />
        <h2 className="feature-title">Bear</h2>
        <p>Canada is divided into 15 terrestrial and five marine ecozones. These ecozones encompass 
          over 80,000 classified species of Canadian wildlife, with an equal number yet to be formally 
          recognized or discovered. Although Canada has a low percentage of endemic species compared 
          to other countries, due to human activities, invasive species, and environmental issues
           in the country, there are currently more than 800 species at risk of being lost. </p>
        </div>

        <div className="feature-box col-lg-4">        
          <img src={cougar} className="cougar" alt="bear" />
          <h2 className="feature-title">Cougar</h2>
          <p>About 65 percent of Canada's resident species are considered "Secure". Over half of 
            Canada's landscape is intact and relatively free of human development. The boreal forest
             of Canada is considered to be the largest intact forest on Earth, with approximately 
             3,000,000 km2 (1,200,000 sq mi) undisturbed by roads, cities or industry.[153 </p>
          </div>

          <div className="feature-box col-lg-4">        
            <img src={deer} className="deer" alt="deer" />
            <h2 className="feature-title">Deer</h2>
            <p>Approximately 12.1 percent of the nation's landmass and freshwater are conservation areas,
               including 11.4 percent designated as protected areas. Approximately 13.8 percent of
                its territorial waters are conserved, including 8.9 percent designated as protected areas.
                 Canada's first National Park, Banff National Park established in 1885, spans 6,641 square
                  kilometres (2,564 sq mi) of mountainous terrain, with many glaciers and ice fields,
                   dense coniferous forest, and alpine landscapes.</p>
            </div>

        </div>
        </div>
  </div>
)
}

export default Features;