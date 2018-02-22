import React from 'react';
import DATA from './data';
import Searchbar from './Searchbar';
import Listings from './Listings';
import Summary from './Summary';
import axios from 'axios';

class App extends React.Component {
 constructor(props) {
 super(props);
  this.state = {
    data:[]
  };
  this.loadFromServer = this.loadFromServer.bind(this);
 }
 loadFromServer(){
   axios.get(this.props.url).then(res =>{
     this.setState({
       data: res.data
     });
   });
 }
 componentDidMount(){
   this.loadFromServer();
 }
 render() {
   return (
   <div>
   <h2>Search For Your Physical Therapist</h2>
   <Searchbar url='http://localhost:3001/api/results'/>
   <Summary data={DATA}/>
   <Listings data={DATA}/>
   </div>
  );
 }
}
export default App;
