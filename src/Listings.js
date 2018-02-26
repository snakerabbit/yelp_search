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
   const results = Object.values(this.props.results);
   const lastResults = results[results.length-1];
   if(lastResults){
     return(

       lastResults.businesses.map(biz =>{
         let location = biz.location;

         return(
           <li key={biz.name}>
             <p>Name: {biz.name}</p>
             <p>Rating: {biz.rating}</p>
             <p>Review Count: {biz.review_count}</p>
             <p>Address: {location.display_address[0]}</p>
             <p>{location.display_address[1]}</p>
             <p>{location.display_address[2]}</p>
           </li>
         );
       })
     );
   }

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
