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
    showListings: false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.showListings = this.showListings.bind(this);
 }

 handleSubmit(searchTerm){
   this.props.createResult(searchTerm).then(
     this.setState({
        showListings: true
      })
    );

 }

 componentDidMount(){
   this.props.fetchResults();
 }

 showListings(){
   if(this.state.showListings){
     return (
       <div>
         <Summary data={DATA}
                  results={this.props.results}/>
         <Listings data={DATA} results={this.props.results}/>
       </div>
     );
   } else {
     return(
       <div></div>
     );
   }
 }
 render() {
   return (
   <div>
   <h2>Search For Your Physical Therapist</h2>
   <Searchbar handleSubmit={this.handleSubmit}/>
   <div>
     {this.showListings()}
   </div>
   </div>
  );
 }
}
export default App;
