var app = require('../app'),
    datalog = require('../globals');


exports.index = function(req, res){
    console.log(datalog.dataLog);
    res.render('index', {
        title: 'Streaker',
        items: datalog.dataLog,
        layout: "layout.jade"
    });
};

// request({uri: 'http://streak.espn.go.com/en/?date=20130401'}, function(err, response, body){
//     var self = this;
//     self.items = new Array();
//     if(err && response.statusCode !== 200){console.log('Request error.')};

//     var $ = cheerio.load(body);
//         $body = $('#game-container'),
//         $matchups = $body.find('.matchup-container');

//     $matchups.each(function(i, item){
//         var $question = $(item).find('.gamequestion').text() || $(item).find('.spons-bgGame').text(),
//             $gametime = $(item).find('.matchupDate').text(),
//             $sporticon = $(item).find('.sport-icon img'),
//             $sportname = $(item).find('.sport-description').text(),
//             $team1 = $(item).find('.mg-column3 a').first().text(),
//             $team1full= $(item).find('.mg-column3 strong').first().text(),
//             $team1url = $(item).find('.mg-column3 a').first() || null,
//             $team1result = $(item).find('.mg-column4').first().text(),
//             $status = $(item).find('.matchupStatus a').text(),
//             $statusurl = $(item).find('.matchupStatus a') || null,
//             $team1perc = $(item).find('.mg-column6').first().text(),
//             $heat = $(item).find('.heatindex strong').text(),
//             $heattitle = $(item).find('.heatindex div'),
//             $streak = $(item).find('.mg-result').text(),
//             $team1pickurl = $(item).find('.mg-column8 a').first(),
//             $team1win = $(item).find('.winner img').first().attr('src') || null,

//             $team2 = $(item).find('.mg-column3 a').last().text(),
//             $team2full= $(item).find('.mg-column3 strong').last().text(),
//             $team2url = $(item).find('.mg-column3 a').last() || null,
//             $team2url = $(item).find('.mg-column3 a').last() || null,
//             $team2result = $(item).find('.mg-column4').last().text(),
//             $team2perc = $(item).find('.mg-column6').last().text(),
//             $team2pickurl = $(item).find('.mg-column8 a').last(),
//             $team2win = $(item).find('.winner img').last().attr('src') || null;


//         self.items[i] = {
//             question: $question.trim(),
//             gametime: $gametime,
//             sporticon: $sporticon.attr('src'),
//             sportname: $sportname,
//             team1: $team1.trim(),
//             team1full: $team1full.trim(),
//             team1url: $team1url.attr('href'),
//             team1win: $team1win,
//             team1result: $team1result,
//             status: $status,
//             statusurl: $statusurl.attr('href'),
//             team1perc: $team1perc,
//             heat: $heat,
//             heattitle: $heattitle.attr('title'),
//             streak: $streak,
//             team1pickurl: $team1pickurl.attr('href'),

//             team2: $team2.trim(),
//             team2url: $team2url.attr('href'),
//             team2win: $team2win,
//             team2full: $team2full.trim(),
//             team2result: $team2result,
//             team2perc: $team2perc,
//             team2pickurl: $team2pickurl.attr('href')
//         };
//     });



// ==UserScript==
// @name       EspnHide1
// @namespace  http://mikeincode.com
// @version    0.1
// @description  hides percentages in ESPN Streak for the Cash
// @match      http://streak.espn.go.com/en/*
// @copyright  2012+ Mike Adams
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js

// ==/UserScript==

// var s = {};
// s.items = new Array();

// $body = $('#game-container')
// $matchups = $body.find('.matchup-container');

// $matchups.each(function(i, item){
//         var $question = $(item).find('.gamequestion').text(),
//             $gametime = $(item).find('.matchupDate').text(),
//             $sporticon = $(item).find('.sport-icon img'),
//             $sportname = $(item).find('.sport-description').text(),
//             $team1 = $(item).find('.mg-column3 a').first().text(),
//             $team1full= $(item).find('.mg-column3 strong').first().text(),
//             $team1url = $(item).find('.mg-column3 a').first() || null,
//             $team1result = $(item).find('.mg-column4').first().text(),
//             $status = $(item).find('.matchupStatus a').text(),
//             $statusurl = $(item).find('.matchupStatus a') || null,
//             $team1perc = $(item).find('.mg-column6').first().text(),
//             $heat = $(item).find('.heatindex strong').text(),
//             $heattitle = $(item).find('.heatindex div'),
//             $streak = $(item).find('.mg-result').text(),
//             $team1pickurl = $(item).find('.mg-column8 a').first(),
//             $team1win = $(item).find('.winner img').first().attr('src') || null,

//             $team2 = $(item).find('.mg-column3 a').last().text(),
//             $team2full= $(item).find('.mg-column3 strong').last().text(),
//             $team2url = $(item).find('.mg-column3 a').last() || null,
//             $team2url = $(item).find('.mg-column3 a').last() || null,
//             $team2result = $(item).find('.mg-column4').last().text(),
//             $team2perc = $(item).find('.mg-column6').last().text(),
//             $team2pickurl = $(item).find('.mg-column8 a').last(),
//             $team2win = $(item).find('.winner img').last().attr('src') || null;
// console.log($team1pickurl);

//     s.items[i] = {
//         question: $question.trim(),
//         gametime: $gametime,
//         sporticon: $sporticon.attr('src'),
//         sportname: $sportname,
//         team1: $team1.trim(),
//         team1full: $team1full.trim(),
//         team1url: $team1url.attr('href'),
//         team1win: $team1win,
//         team1result: $team1result,
//         status: $status,
//         statusurl: $statusurl.attr('href'),
//         team1perc: $team1perc,
//         heat: $heat,
//         heattitle: $heattitle.attr('title'),
//         streak: $streak,
//         team1pickurl: $team1pickurl.attr('href'),

//         team2: $team2.trim(),
//         team2url: $team2url.attr('href'),
//         team2win: $team2win,
//         team2full: $team2full.trim(),
//         team2result: $team2result,
//         team2perc: $team2perc,
//         team2pickurl: $team2pickurl.attr('href')
//     };
// });


// console.log(s);

// var ajaxHelper = function(options) {
//     options = options || {};
//     // options.beforeSend = options.beforeSend || headerSetter
//     options.type = options.type;
//     options.contentType = options.contentType || "application/json";
//     options.data = options.data || {};
//     options.success = options.success || null;
//     $.ajax('http://127.0.0.1:3000/post', options);
// }

// setTimeout(ajaxHelper({
//     type: "POST",
//     data: JSON.stringify(s),
//     success: console.log("Success")
// }),1000)
