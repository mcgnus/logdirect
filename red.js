var express = require('express');
var app = express();

// array to save urls
var redirections = [];

// object to save requests for urls
var requests = {};

// interface to save a url
function saveUrl(url){
  redirections.push(url);
  var index = redirections.indexOf(url);
  requests[url] = [];
  console.log(new Date() + " Inserted " + url + " at " + index);
  return index;
}

// interface to get a url
function findUrl(index, req){
  return redirections[index] || "https://www.google.com";
}

// log infos for url
function logUser(req){
  var targetUrl = redirections[req.params.id];
  var ip = req.ip;
  var agent = req.headers['user-agent'];
  requests[targetUrl].push({ip:ip, agent:agent, date: new Date()});
  console.log(new Date() + " Request for " + targetUrl + " from " + ip + " with " + agent);
}

// provide logs for the url at id
app.get("/logs/:id", function(req, res){
  res.json(requests[findUrl(req.params.id)]);
});

// make new hook for url
app.get("/make", function(req, res){
  res.json({tag: saveUrl(req.query.url)});
});

// redirect to acutal url and log in between
app.get("/get/:id", function(req, res){
  logUser(req);
  res.redirect(findUrl(req.params.id, req));
});

// start server
app.listen(8080);
