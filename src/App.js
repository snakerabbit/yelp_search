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
   console.log(this.props.url);
   axios({
    method: 'get',
    url: "http://localhost:3001/api/"
  }).catch(err => console.log(err));

   axios({
    method: 'get',
    url: this.props.url,
  }).then((res) => {
    this.setState({
      data: res.data[res.data.length-1]
    });
  });
 }
 componentDidMount(){
   this.loadFromServer();
 }
 render() {
   console.log(this.state.data);
   return (
   <div>
   <h2>Search For Your Physical Therapist</h2>
   <Searchbar url='http://localhost:3001/api/results' data={this.state.data}/>
   <Summary data={DATA} dat={this.state.data}/>
   <Listings data={DATA} dat={this.state.data}/>
   </div>
  );
 }
}
export default App;
