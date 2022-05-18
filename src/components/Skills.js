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
            <p>JAVASCRIPT</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '75%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>ReactJS</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '75%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>HTML5</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '90%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>CSS3</p>
            <div className='progress grey lighten-1'>
               <div className='determinate blue' 
               style={{width: '90%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>Graphic Designing (Figma, AdobeXD)</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '90%'}}>
               </div>
            </div>
          </div>
          <div className='col s6'>
            <p>Data visualization tools : Tableau, Google Charts</p>
            <div className='progress grey lighten-1'>
            <div className='determinate blue' 
               style={{width: '70%'}}>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills