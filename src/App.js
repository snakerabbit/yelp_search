import React from 'react';
import DATA from './data';
import Searchbar from './Searchbar';
import Listings from './Listings';
import Summary from './Summary';

class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
   return (
   <div>
   <h2>Search For Your Physical Therapist</h2>
   <Searchbar/>
   <Summary data={DATA}/>
   <Listings data={DATA}/>
   </div>
  );
 }
}
export default App;
