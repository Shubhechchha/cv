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
            <p>HTML</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '90%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>CSS</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '80%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>JAVASCRIPT</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '75%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>REACT</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '75%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>GRAPHIC DESIGNING</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '90%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>WORDPRESS</p>
            <div className='progress grey lighten-1'>
               <div className='determinate blue' 
               style={{width: '80%'}}>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills