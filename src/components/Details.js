import React from 'react';
// import {Link, useLocation, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Table from './Table';



/* function useQuery() {
    return new URLSearchParams(useLocation().search);
  } */

function Details(props) {

    /*     let {title} = useParams()
    let {year} = useParams()
    console.log("perURL: title:"+title+", year:"+year) */

    let title = props.match.params.title
    let year = props.match.params.year

    /*let query = useQuery()

    let detailData = [{
        title: query.get("title"),
        year: query.get("year")
    }] */
    
    let detailData = [{
        title: title,
        year: year
    }]

    return (
        <div>
            <Table data={detailData} headers={["Titel", "Jahr"]} properties={["title", "year"]} />
            <Link to="/">Zurück zur Startseite</Link>
        </div>
    );
}

export default Details;