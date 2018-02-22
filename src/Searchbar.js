import React from 'react';
import axios from 'axios';
import './app.css';

class Searchbar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     searchTerm:'',
     data:[]
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(e){
   this.setState({
     searchTerm: e.currentTarget.value
   });
 }

 handleSubmit(e){
   e.preventDefault();
   let searchTerm = this.state.searchTerm;
   axios.post(this.props.url,searchTerm)
    .then(function(response){
      console.log(response);
    }
  )
    .catch(function(error){
      console.log(error);
    });
   this.setState({
     searchTerm:''
   });
 }

 render() {
   // console.log(this.props.data);
   return (
   <div id='search-bar'>
   <form>
     <label>Type Your Location:
       <input value={this.state.searchTerm} type='text' onChange={this.handleChange} placeholder='type here'/>
     </label>
     <input type='submit' onClick={this.handleSubmit} value='Search'/>
   </form>
   </div>
  );
 }
}
export default Searchbar;
