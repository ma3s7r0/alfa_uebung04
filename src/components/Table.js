import React from 'react';
import '../App.css';
import TableRow from './TableRow';


function Table({data, headers, properties, addLink}) {

    return (
        <table>
            <thead>
                <tr>            
                        {headers.map((ele) => <th>{ele}</th>)}
                        {addLink && <th></th>}


                    {/* {   // don't create the column for the clickable button if the prop is existing 
                        (typeof clickText !== 'undefined' && typeof clickFunction !== 'undefined') ?
                        <th></th> : ""*/
                    } 
                </tr>
            </thead>
            <tbody>
                {
                    // scroll through the entries
                    data.map(
                        (element, index) => (
                            <TableRow headers={headers} element={element} index={index} properties={properties} addLink={addLink}/>
                        )
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;