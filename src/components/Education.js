import React, {useState} from 'react';
import '../App.css';
import ToggledEducationRow from './ToggledEducationRow';




const Education = () => {
  const [clickedButtonId, setClickedButton] = useState();
  const [toggleDesp, setToggleDesp] = useState(false);

 const showHideDesp = (id, state) => {
    setClickedButton(id);
    setToggleDesp(state);
 }

const educationData = [
  {
    id: 1,
    university : "IT University of Copenhagen, Denmark",
    course : "Master of Science in Digital Innovation and Management",
    duration : "08.2017-09.2019",
    description: [
      "Digital Change-Management", 
      "Process management", 
      "IT-Governance",
       "Master thesis: Analysis of Customer Queuing psychology on an online Queue Management System using a case of company Queue-it, Note: 10 (from overall 12)"
      ]
  },

  {
    id: 2,
    university : "Hanyang University Seoul, South Korea",
    course : "Master Exchange Semester",
    duration : "09.2018-12.2018",
    description: [
      "Web Designing",
      "Consumer Behavior",
      "Organizational Behavior"
    ]
  },
  
  {
    id: 3,
    university : "St.Xaviers College, Kathmandu, Nepal",
    course : "Bachelor in Information and Management",
    duration : "10.2012-09.2016",
    description: [
      "Business Communication",
      "Operations management",
      "Database Management System",
      "Critical Thinking and decision making"
    ]
  },

]

  return (
    <div>
      
        <div className='card-content'>
          <h4 className='sub_title'>EDUCATIONS</h4>
          <table className='stripped'>
            <thead>
              <tr>
                <th>UNIVERSITY</th>
                <th>COURSE</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
             {educationData.map( education => (
               <ToggledEducationRow
                education={education} 
                toggleDesp={toggleDesp} 
                clickedButtonId={clickedButtonId} 
                showHideDesp={showHideDesp}
                />
             ))}
              
            </tbody>
          </table>
        </div>
     
    </div>
  )
}


export default Education