import React from 'react';
import '../App.css';


const Courses = () => {

    const courseList = [

        {
            id: 1,
            course :'Sprachkurse Deutsch A1 bis B1',
            duration :'08.2020 - 05.2021'    
          },  
            
        {
          id: 2,
          course :'Coursera Online course "Interactivity with JavaScript',
          duration :'02.2020 - 04.2021'    
        },
        
        {
            id: 3,
            course :'Coursera Online course Introduction to CSS3',
            duration :'01.2021 - 03.2021'    
          },

          {
            id: 4,
            course :'Coursera Online course Introduction to HTML',
            duration :'11.2020 - 01.2021'    
          },

          {
            id: 5,
            course :'Udemy Online course SAP for Beginners',
            duration :'12.2019 - 12.2019'    
          },

          {
            id: 6,
            course :'ScrumStudy Online course "Scrum Fundamentals Certified',
            duration :'10.2019 - 10.2019'    
          },  
        
    ]

    return (
    
    <div>
        <div className='card brown darken-3'>
                <div className='card-content white-text'>
                    <p>Migrated to Deutschland
                        (10.2019-07.2020)
                     </p>
                </div>
            </div>
 
            <div className='card card-custom brown darken-3'>
            <div className='card-courses'>
            <h6 className='sub_title'>
                    COURSES
            </h6>
            <hr />
            <div className='col s12'>
              <table className='highlight'>
                    <thead>
                          <tr>
                              <th>Course</th>
                              <th>Duration</th>
                          </tr>
                      </thead>
                      <tbody>
                        {courseList.map((c) => 
                            <React.Fragment key={c.id}>
                            <tr>
                            <td>{c.course}</td> 
                            <td>{c.duration}</td> 
                            </tr>
                        </React.Fragment>
                        )}   
                      </tbody>
              </table>
            </div>  
            </div>  
            </div>



    </div>
  )
}

export default Courses