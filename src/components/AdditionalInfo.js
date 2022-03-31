function AdditionalInfo({description}) {
    return (  
        <tr className='additional-info'>
            <td colSpan= "2">
                {
                    description.map(course => (
                        <tr>
                            <td>{course}</td>
                        </tr>
                    ))
                }
            </td>
        </tr>
    );
}

export default AdditionalInfo;