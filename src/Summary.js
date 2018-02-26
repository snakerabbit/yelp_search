import React from 'react';


class Summary extends React.Component {
 constructor(props) {
 super(props);

  this.number = this.number.bind(this);
  this.numberWithRatings = this.numberWithRatings.bind(this);
  this.averageRating = this.averageRating.bind(this);
  this.totalReviews = this.totalReviews.bind(this);
  this.searchTerm = this.searchTerm.bind(this);

 }

number(){
  let results = Object.values(this.props.results);
  let lastResults = results[results.length-1];
  if(lastResults){
    return lastResults.total;
  }
}

 numberWithRatings(){
   let results = Object.values(this.props.results);
   let lastResults = results[results.length-1];
   if(lastResults){
     let rated = lastResults.businesses.map(biz =>{
       return (
         biz.review_count
       );
     });
     return rated.length;
   }

 }

 averageRating(){
   let results = Object.values(this.props.results);
   let lastResults = results[results.length-1];
   if(lastResults){
     let ratings = lastResults.businesses.map(biz =>{
       return(
         biz.rating
       );
     });
     let average = ratings.reduce((accumulator, current) => accumulator + current)/ratings.length;

     return average;
   }

 }

 totalReviews(){
   let results = Object.values(this.props.results);
   let lastResults = results[results.length-1];
   if(lastResults){
     let reviews = lastResults.businesses.map(biz =>{
       return(
         biz.review_count
       );
     }) ;

     return reviews.reduce((accumulator, current) => accumulator + current);
   }

 }
 searchTerm(){
   let results = Object.values(this.props.results);
   let lastResults = results[results.length-1];
   if(lastResults){
     return lastResults.searchTerm
   }
 }


 render() {
   return (
   <div>
   <h2>{this.searchTerm()}</h2>
   <h3>Summary: </h3>
   <p>Number of PT's in the area: {this.number()}</p>
   <p>Total PT's with Ratings:{this.numberWithRatings()} </p>
   <p>Average Rating:{this.averageRating()} </p>
   <p>Total Number of Reviews:{this.totalReviews()} </p>
   </div>
  );
 }
}
export default Summary;
