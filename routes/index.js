var request = require('request')
  , cheerio = require('cheerio')
  , url = require('url');

exports.index = function(req, res){
  request({uri: 'http://streak.espn.go.com/en/?date=20130312'}, function(err, response, body){
    var self = this;
    self.items = new Array();
    if(err && response.statusCode !== 200){console.log('Request error.');
  }
  var $ = cheerio.load(body);
      $body = $('#game-container'),
      $matchups = $body.find('.matchup-container');

      $matchups.each(function(i, item){
        var $tbody = $(item).find('tbody'),
            $question = $(item).find('.gamequestion').text(),
            $gametime = $(item).find('.matchupDate').text(),
            $sporticon = $(item).find('.sport-icon img'),
            $sportname = $(item).find('.sport-description').text(),
            $team1 = $(item).find('.mg-column3 a').first().text(),
            $team1full= $(item).find('.mg-column3 strong').first().text(),
            $team1url = $(item).find('.mg-column3 a').first() || null,
            $team1result = $(item).find('.mg-column4').first().text(),
            $status = $(item).find('.matchupStatus a').text(),
            $statusurl = $(item).find('.matchupStatus a') || null,
            $team1perc = $(item).find('.mg-column6').first().text(),
            $heat = $(item).find('.heatindex strong').text(),
            $heattitle = $(item).find('.heatindex div'),
            // $discusscount = $(item).find('.option-convo').text(),
            // $streak = $(item).find('.mg-result').text(),

            $team2 = $(item).find('.mg-column3 a').last().text(),
            $team2full= $(item).find('.mg-column3 strong').last().text(),
            $team2url = $(item).find('.mg-column3 a').last() || null,
            $team2 = $(item).find('.mg-column3 a').last().text(),
            $team2url = $(item).find('.mg-column3 a').last() || null,
            $team2result = $(item).find('.mg-column4').last().text()
            $team2perc = $(item).find('.mg-column6').last().text();

// console.log($discusscount);

        self.items[i] = {
          question: $question.trim(),
          gametime: $gametime,
          sporticon: $sporticon.attr('src'),
          sportname: $sportname,
          team1: $team1.trim(),
          team1full: $team1full.trim(),
          team1url: $team1url.attr('href'),
          team1result: $team1result,
          status: $status,
          statusurl: $statusurl.attr('href'),
          team1perc: $team1perc,
          heat: $heat,
          heattitle: $heattitle.attr('title'),
          // streak: $streak,
          // discusscount: $discusscount,

          team2: $team2.trim(),
          team2url: $team2url.attr('href'),
          team2full: $team2full.trim(),
          team2result: $team2result,
          team2perc: $team2perc
        };
      });

    res.render('index', {
      title: 'Streaker',
      items: self.items,
      layout: "layout.jade"
    });
  });
}