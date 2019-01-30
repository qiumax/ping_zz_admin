var mongoose = require("mongoose");
var Ping = require("../models/Ping");
var UserPing = require("../models/UserPing");
var dateformat = require("dateformat");
var pingController = {};

pingController.pinging = function(req, res) {
    console.log(req.body);

    Ping.find({
        state: 1
    }).then(pings=>{
        pings.forEach(ping=>{
            ping.create_time = dateformat(ping.created_at, 'yyyy-mm-dd HH:MM ')
        })
        res.render('ping', {
            title: "拼团中",
            pings: pings
        });
    })
};

/*
pingController.toRefund = function(req, res) {
    console.log(req.body);

    Ping.find({
        state: 2,
        need_refund: true,
        refunded: false
    }).then(pings=>{
        pings.forEach(ping=>{
            ping.create_time = dateformat(ping.created_at, 'yyyy/mm/dd hh:MM')
        })
        res.render('ping', {
            title: "待处理",
            pings: pings
        });
    })
};
*/

pingController.toProcess = function(req, res) {
    console.log(req.body);

    Ping.find({
        state: 2,
        need_process: true,
        processed: false
    }).then(pings=>{
        pings.forEach(ping=>{
            ping.create_time = dateformat(ping.created_at, 'yyyy-mm-dd HH:MM')
        })
        res.render('ping', {
            title: "待处理",
            pings: pings
        });
    })
};

/*
pingController.refunded = function(req, res) {
    console.log(req.body);

    Ping.find({
        state: 2,
        refunded: true
    }).then(pings=>{
        pings.forEach(ping=>{
            ping.create_time = dateformat(ping.created_at, 'yyyy/mm/dd hh:MM')
        })
        res.render('ping', {
            title: "已处理",
            pings: pings
        });
    })
};
*/

pingController.processed = function(req, res) {
    console.log(req.body);

    Ping.find({
        state: 2,
        processed: true
    }).then(pings=>{
        pings.forEach(ping=>{
            ping.create_time = dateformat(ping.created_at, 'yyyy-mm-dd HH:MM')
        })
        res.render('ping', {
            title: "已处理",
            pings: pings
        });
    })
};

module.exports = pingController;
