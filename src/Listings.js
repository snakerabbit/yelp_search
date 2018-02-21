import React from 'react';


class Listings extends React.Component {
 constructor(props) {
 super(props);
 this.renderListings = this.renderListings.bind(this);
 this.state = {
   data:''
 };
 }

 renderListings(){
   return(

     this.props.data.businesses.map(biz =>{
       let location = biz.location;

       return(
         <li key={biz.name}>
           <p>Name: {biz.id}</p>
           <p>Rating: {biz.rating}</p>
           <p>Review Count: {biz.review_count}</p>
           <p>Address: {location.display_address[0]}</p>
           <p>{location.display_address[1]}</p>
         </li>
       );
     })
   );
 }
 render() {

   return (
   <div>
   <h2>Listings</h2>
   <ul>
     {this.renderListings()}
   </ul>
   </div>
  );
 }
}
export default Listings;
