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
    data:[],
    location:null
  };
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleSubmit(searchTerm){
   // this.setState({
   //   location: searchTerm
   // });
   //  axios.post(this.props.url,{
   //   searchTerm: searchTerm
   // })
   //   .then((response)=>{
   //     this.setState({
   //       data:response.data[response.data.length-1]
   //     });
   //   }
   // )
   //   .catch(function(error){
   //     console.log(error);
   //   });
   this.props.createResult(searchTerm);
 }

 componentDidMount(){
   this.props.fetchResults();
 }
 render() {
   return (
   <div>
   <h2>Search For Your Physical Therapist</h2>
   <Searchbar handleSubmit={this.handleSubmit}/>
   <Summary data={DATA}
            results={this.props.results}/>
   <Listings data={DATA} results={this.props.results}/>
   </div>
  );
 }
}
export default App;
