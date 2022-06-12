import React from 'react'

const Skills = () => {
  return (
    <div className='card brown darken-3'>
      <div className='card-content white-text'>
        <h6>
          <strong>
            TECHNICAL SKILLS
          </strong>
        </h6>
        <hr />
        <div className='row mt-top'>
          
          <div className='col s6'>
            <p>React 16+</p> <br/>
            <p>JS | ES6</p> <br/>
            <p>NodeJS</p> <br/>
            <p>User Experience</p> <br/>
          </div>
          <div className='col s6'>
            <p> Redux</p> <br/>
            <p>Context API</p> <br/>
            <p>CSS | SCSS | LESS</p> <br/>
            <p>Microfrontend</p><br/> 
           </div>
            
            <div className='col s12'>
            <p>Responsive design | Mobile first</p> <br/>
             <p> Jest | Enzyme | React Testing Utils</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Skills