//import {express} from 'express'; dafuq

const bodyParser = require('body-parser');

//const express = require('express'); not entirely needed

const app = require('express')();

const cors = require('cors');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:  true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen('4000', () => {
    console.log("App running on port 4000");
});

app.get("/", (_, res) => {
    res.send("I'm working!");
});

app.get("/users", cors(), (_, res) => {
    let users = '[{"name": "john", "email":"john@met.com"}, {"name":"lucas", "email":"luke@met.com"}]';

    res.send(users);
    //res.send(JSON.parse(users));
    //res.send({ "data": "test" });
});

/*app.post("/users", cors(), (_, res) => {
    //let users = {"data": [{"name": "john", "email":"john@met.com"}, {"name":"lucas", "email":"luke@met.com"}]};
    let users = {"data": "test"};
    // res.send(users);
    //res.send(JSON.parse(users));
    res.send({"data":"test"});
});*/