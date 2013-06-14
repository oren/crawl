'use strict';

// core modules
var http = require('http');

// npm packages
var cheerio = require('cheerio')

var url = 'http://www.yellowpages.com/west-monroe-la/mip/armstrong-cricket-farm-5032804?lid=5032804'
var html = '';

http.get(url, function(res) {
  res.on('data', function (chunk) {
    html += chunk;
  });

  res.on('end', function (chunk) {
    var $ = cheerio.load(html);

    var name = $('.fn.org a').text();
    console.log(name);

    var phone = $('.phone').text();
    phone = phone.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    console.log(phone);
  });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

// output:
// Armstrong Cricket Farm
// (318) 387-6000

