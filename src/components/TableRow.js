import React from 'react';
import { Link } from 'react-router-dom';

function TableRow({element, index, properties, linkProperties}) {

   return (
        <tr className = {
            // set on every 2nd row the property odd
            (index & 1) ? "odd" : ""
        }>{
            // create a cell for every property of the underlying object
            properties.map(property => <td>{element[property]}</td>)}
            
            {linkProperties && (
                <td>
                <Link to={"/details?"+linkProperties.map((prop, index) => index ? "&"+prop+"="+element[prop] : prop+"="+element[prop]).join('')}>Details</Link>
                </td>
            )}
        </tr>      
    );
}

export default TableRow;