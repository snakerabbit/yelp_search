import axios from 'axios';

const url = 'http://localhost:3001/api/results';

export const createResult = searchTerm =>{
  return axios.post(url,{
   searchTerm: searchTerm
 });

};

export const fetchResults = () =>{
  axios({
   method: 'get',
   url: "http://localhost:3001/api/"
 }).catch(err => console.log(err));

  return axios({
   method: 'get',
   url: url,
 })
 .then((res) => {
   return res;
 });
};

// export const fetchResult = id =>{
//   axios({
//    method: 'get',
//    url: "http://localhost:3001/api/"
//  }).catch(err => console.log(err));
//
//   return axios({
//    method: 'get',
//    url: url,
//    params:{
//      id: id
//    }
//  })
//  .then((res) => {
//    return res;
//  });
// };
