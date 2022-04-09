import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';

const Home = () => {
  return (
     <section>
         <div className='container'>
             <div className='row sameHeight'>
                 <div className='col s12 m12 l4  brown darken-3  sameHeight_child'>
                    <Profile/>
                    <Contact />
                    <Skills/>
                    <Courses />
                    </div>

                  
                 <div className='col s12 m12 l8 grey lighten-2 sameHeight_child '>
                    <About/>
                    <Experience />
                    <Education />
                 </div>

             </div>
         </div>
     </section>  
  )
}

export default Home;