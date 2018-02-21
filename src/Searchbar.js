import React from 'react';
import './app.css';

class Searchbar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     searchTerm:''
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
   alert(searchTerm);
   this.setState({
     searchTerm:''
   });
 }

 render() {
   console.log(this.state.searchTerm);
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
