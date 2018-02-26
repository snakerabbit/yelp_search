'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Result = require('./model/results');


var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://user:password@ds121091.mlab.com:21091/yelpsearch');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 if ('OPTIONS' === req.method) {
  res.sendStatus(200);
} else {
  next();
}
});
const yelp = require('yelp-fusion');

const client = yelp.client('0qhNaE_sLmGJEIA1kopaCaNYS4JyWpyv7AR9YCE1GO3WLhepBWDw4OwKohjJIp7zw5G2hpJdzD_e6a_b4WToYsRe0IxgvlkWe8rO4kHc-C5Svjc4YhSYz8d19rOMWnYx');



router.get('/', function(req,res){

  res.json({
    message: 'API Initialized'
  });

  router.route('/results')
    .get(function(req, res) {
      Result.find(function(err, results) {
        if(err){
          res.send(err);
        }
        res.json(results);
      });
    })
    .post(function(req, res) {
      var responses;
      client.search({
        term:'physical therapist',
        location: req.body.searchTerm
      }).then(response => {
        responses = response.jsonBody;
        console.log(responses);
        var result = new Result();
        result.businesses = responses.businesses;
        result.total = responses.total;
        result.searchTerm = req.body.searchTerm;
        result.save(function(err) {
          res.send(err);
        });
      }).catch(e => {
        console.log(e);
      });

    });
});

app.use('/api', router);

app.listen(port, function(){
  console.log(`api running on port ${port}!!`);
});
