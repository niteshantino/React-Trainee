import React from 'react'


const Display = ({ formData }) => {

    const { input, location, lang } = formData;

    return (
        <div className='display-data'>
            <h2>Display Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th> Languages Known</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{input}</td>
                        <td>{location}</td>
                        <td>{lang}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display;