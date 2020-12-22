import React from 'react';
import { Link } from 'react-router-dom';

function TableRow({headers, element, index, properties, addLink}) {

    var keys = Object.keys(element)
    console.log(keys)
    keys.map((ele) => console.log(element[ele]))

    return (
        <tr className = {
            // set on every 2nd row the property odd
            (index & 1) ? "odd" : ""
        }>{
            // create a cell for every property of the underlying object
            properties.map(property => <td>{element[property]}</td>)}
            {addLink && (
            <td> <Link to={"/details?"+keys.map((key, index) => index ? "&"+key+"="+element[key] : key+"="+element[key])}>Details</Link> </td>
            )}
                
            
            
            { 
            // create the buttons only if the props clickText and clickFuntion is defined
/*             (typeof clickText !== 'undefined' && typeof clickFunction !== 'undefined') ? 
            <td onClick={() => clickFunction(index)} className="button">{clickText}</td> : "" */
            }
        </tr>      
    );
}

export default TableRow;