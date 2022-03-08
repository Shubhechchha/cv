import React from 'react';

const About = () => {
  return (
  <div> 
    <div className='card'>
      <div className='card-content'>
        <h6 className='mt-bottom'>
        <strong>
          ABOUT ME
        </strong>
        </h6>
        <p className='grey-text'>I am a highly motivated and diligent innovation management graduate. 
        My studies have given me a thorough understanding of digital business processes and IT Governance through practical use cases. 
        I aspire to put my knowledge into practice in a fast-paced business environment.</p>
       </div>

      <div className='card-action'>
        <h6>
         <strong> PERSONAL INFO</strong>
        </h6>

        <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Phone:</strong> +49 172 716 2305
              </p>
              <p>
                <strong>Address:</strong> Balthasar Neumann Platz-1, Brühl 50321
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <h6>
                <strong>Languages</strong> 
                <p>Deutsch B1 Certified, English
                   Nepali, Hindi
                </p> 
                
                
              </h6>
            
            </div>
          </div>
        </div> 

    </div>
  </div>
  )
}

export default About