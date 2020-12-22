import React from 'react';
import '../App.css';
import TableRow from './TableRow';


function Table({data, headers, properties, linkProperties}) {

    return (
        <table>
            <thead>
                <tr>            
                    {headers.map((ele) => <th>{ele}</th>)}
                    {linkProperties && <th></th>} 
                </tr>
            </thead>
            <tbody>
                {
                    // scroll through the entries
                    data.map(
                        (element, index) => (
                            <TableRow element={element} index={index} properties={properties} linkProperties={linkProperties}/>
                        )
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;