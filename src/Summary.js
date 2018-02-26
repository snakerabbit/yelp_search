import React from 'react';
import axios from 'axios';

class Summary extends React.Component {
 constructor(props) {
 super(props);
  this.state = {
    number:this.props.data.total,
    withRatings:this.numberWithRatings(),
    avgRating:this.averageRating(),
    numReviews: this.totalReviews()
  };
 }


 numberWithRatings(){
   let rated = this.props.data.businesses.map(biz =>{
     return (
       biz.review_count
     );
   });
   return rated.length;
 }

 averageRating(){
   let ratings = this.props.data.businesses.map(biz =>{
     return(
       biz.rating
     );
   });
   let average = ratings.reduce((accumulator, current) => accumulator + current)/ratings.length;

   return average;
 }

 totalReviews(){
   let reviews = this.props.data.businesses.map(biz =>{
     return(
       biz.review_count
     );
   }) ;

   return reviews.reduce((accumulator, current) => accumulator + current);
 }


 render() {
   console.log(this.props.results);
   return (
   <div>
   <h2>Summary: </h2>
   <p>Number of PT's in the area: {this.state.number}</p>
   <p>Total PT's with Ratings:{this.state.withRatings} </p>
   <p>Average Rating:{this.state.avgRating} </p>
   <p>Total Number of Reviews:{this.state.numReviews} </p>
   </div>
  );
 }
}
export default Summary;
