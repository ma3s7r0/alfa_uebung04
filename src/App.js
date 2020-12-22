import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Table from './components/Table';
import Details from './components/Details';

const alben = 	[
  {
      "title": "Wretch",
      "year": 1991
  },
  {
      "title": "Blues for the Red Sun",
      "year": 1992
  },
  {
      "title": "Welcome to Sky Valley",
      "year": 1994
  },
  {
      "title": "...And the Circus Leaves Town",
      "year": 1995
  }
]


function App() {
  return (
      <BrowserRouter>
        <h1>Music</h1>
        <Route path="/" exact component={() => <Table data={alben} headers={["Titel"]} properties={["title"]} linkProperties={["title", "year"]} />} />
        <Route path="/details" component={Details}/>
      </BrowserRouter>
  );
}

export default App;
