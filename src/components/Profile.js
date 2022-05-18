import React from 'react';
import ImgProfile from '../images/cv_photo.jpg';
import '../App.css';

const Profile = () => {
  return (
		<div>
		
		<div className='card brown darken-3 z-depth-0'>
		<div className="card-image circle waves-effect waves-block waves-light  ">
		<img className='activator' src={ImgProfile} alt='Shubhechchha Dahal' />
		</div>
		<h4 className='grey-text text-lighten-3 center-align'>
            		<strong>Shubhechchha Dahal</strong>	
  					</h4>
				</div>
		
				
					<div className='card z-depth-1 grey lighten-1 hide-on-large-only'>
      					<div className='card-content center social'>
       						 <h4 className='mt-bottom'>
        				<strong>
          					ABOUT ME
        				</strong>
        				</h4>
        				<p className='black-text'> I am an enthusiastic web designer with proven experience in investigating effective ways to improvise end-user interactions. 
						I have a sound knowledge of using HTML, CSS, JavaScript, and ReactJS. I am passionate about exploring new technologies, self-improvement, and leveraging skills. 
						</p>
       </div>
    </div>
		    
	</div>
	);
}
export default Profile;