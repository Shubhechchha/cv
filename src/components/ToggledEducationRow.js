import React from "react";
import AdditionalInfo from "./AdditionalInfo";

function ToggledEducationRow({education, toggleDesp, clickedButtonId, showHideDesp}) {
    return (
        <React.Fragment key = {education.id}>
            <tr>
            <td>{education.university}</td>
            <td>{education.course}</td>
            <td>{education.duration}</td>
            <td><button className='btn blue lighten-2' onClick={() => showHideDesp(education.id, !toggleDesp)}>View</button></td>
        </tr>
        {clickedButtonId === education.id && toggleDesp && <AdditionalInfo description={education.description} />}

        </React.Fragment>
        
     );
}

export default ToggledEducationRow;