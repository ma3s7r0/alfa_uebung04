import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import Table from './Table';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Details(props) {

    let query = useQuery()

    let detailData = [{
        title: query.get("title"),
        year: query.get("year")
    }]

    return (
        <div>
            <Table data={detailData} headers={["Titel", "Jahr"]} properties={["title", "year"]} />
            <Link to="/">Zurück zur Startseite</Link>
        </div>
    );
}

export default Details;