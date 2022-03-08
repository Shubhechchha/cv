import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Navbar from './Navbar';
import About from './About';

const Home = () => {
  return (
     <section>
         <Navbar />
         <div className='container'>
             <div className='row'>
                 <div className='col s12 m3'>
                    <Profile/>
                 </div>
                 <div className='col s12 m9'>
                    <About/>
                    <Skills />
                    <Experience />
                    <Education />
                 </div>

             </div>
         </div>
     </section>  
  )
}

export default Home