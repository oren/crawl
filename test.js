'use strict';

// my module
var scrape = require('./scrape.js');

var url = 'http://www.yellowpages.com/west-monroe-la/mip/armstrong-cricket-farm-5032804?lid=5032804'

scrape(url, function(err, data) {
  if (err) {
    console.error(err);
    return 1;
  }

  console.log(data);
});

// output 
// { name: 'Armstrong Cricket Farm', phone: '(318) 387-6000' }
