import React from 'react';
import ImgProfile from '../images/cv_photo.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

const Profile = () => {
  return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<Link to = '#' className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
            Shubhechchha Dahal
  					</span>
					<p>Aspiring Front end Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-linkedin grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div>
			
			<div className='card'>
			<div className='card-content'>
        	<h6 className='mt-bottom'>
			<strong>
          			PROFESSIONAL SKILLS
        		</strong>
			</h6>
			<p>MS Office-Packages
				Data Visualization tools (Tableau, Gephi)
				Digital Content Creation</p>
			</div>
			</div>

			<div className='card'>
				<div className='card-content'>
					<p>Migrated to Deutschland
						(10.2019-07.2020)
					 </p>
				</div>
			</div>

			<div className='card card-custom'>
			<div className='card-content'>
        	<h6 className='mt-bottom'>
			<strong>
          			FURTHER EDUCATION
        		</strong>
			</h6>
			<div className='col s12 m8 l9'>
                
              <h6>  
                 Sprachkurse Deutsch A1 bis B1
              </h6>
              <p>(08.2020 - 05.2021)</p>
            
			  
              <h6>  
			  Coursera Online course "Interactivity with JavaScript
              </h6>
              <p>(02.2021-04.2021)</p>
            
			  <h6>  
			  	Coursera Online course "Introduction to CSS3
              </h6>
              <p>(01.2021-03.2021)</p>
            
			  <h6>  
			 	 Coursera Onlinecourse "Introduction to HTML5
              </h6>
              <p>(11.2020-01.2021)</p>
            
			  <h6>  
			  	Udemy Online course "SAP for Beginners
              </h6>
              <p>(12.2019-12.2019)</p>
            
			  <h6>  
			  	ScrumStudy Online course "Scrum Fundamentals Certified
              </h6>
              <p>(10.2019-10.2019)</p>
            
			</div>
			
			
          
        		
       		</div>	
      	 	</div>
			   
		</div>
	);
}
export default Profile