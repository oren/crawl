'use strict';

// module that scrape a webpage on YP and return business name and phone
//
// arguments: url and callback
// callback will be fired with { name: 'Armstrong Cricket Farm', phone: '(318) 387-6000' }
//
// usage:
// var scrape = require('./scrape.js');
// 
// var url = 'http://www.yellowpages.com/west-monroe-la/mip/armstrong-cricket-farm-5032804?lid=5032804'
// 
// scrape(url, function(err, data) {
//   if (err) {
//     console.error(err);
//     return 1;
//   }
// 
//   console.log(data);
// });

// core modules
var http = require('http');

// npm packages
var cheerio = require('cheerio')

module.exports = function(url, cb) {
  var data = {name: null, phone: null};
  var html = '';

  http.get(url, function(res) {
    res.on('data', function (chunk) {
      html += chunk;
    });

    res.on('end', function (chunk) {
      var $ = cheerio.load(html);

      data.name = $('.fn.org a').text();
      data.phone = $('.phone').text();
      data.phone = data.phone.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');

      cb && cb(null, data);
    });
  }).on('error', function(e) {
      cb && cb(e.message);
  });
};
