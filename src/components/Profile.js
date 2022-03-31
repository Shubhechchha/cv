import React from 'react';
import ImgProfile from '../images/cv_photo.jpg';
import '../App.css';

const Profile = () => {
  return (
		<div>
		
		<div className='card cyan darken-3 z-depth-0'>
		<div className="card-image waves-effect waves-block waves-light">
		<img className='activator' src={ImgProfile} alt='Shubhechchha Dahal' />
		<h4 className='grey-text text-lighten-3'>
            		<strong>Shubhechchha Dahal</strong>	
  					</h4>
				</div>
					
				</div>
		
				
					<div className='card z-depth-0 cyan darken-4 hide-on-large-only'>
      					<div className='card-content center social'>
       						 <h4 className='mt-bottom'>
        				<strong>
          					ABOUT ME
        				</strong>
        				</h4>
        				<p className='grey-text'>I am a highly motivated and diligent innovation management graduate. 
       						 My studies have given me a thorough understanding of digital business processes and IT Governance through practical use cases. 
        						I aspire to put my knowledge into practice in a fast-paced business environment.</p>
       </div>
    </div>
		    
	</div>
	);
}
export default Profile;