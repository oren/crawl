var test = require('tape');

var scrape = require('../scrape.js');

test('scrape business name and phone', function (t) {
  t.plan(1);  // you have to declare how many assertions are in your test

  scrape('http://www.yellowpages.com/west-monroe-la/mip/armstrong-cricket-farm-5032804?lid=5032804', function(err, data){
    t.deepEqual(data, { name: 'Armstrong Cricket Farm', phone: '(318)387-6000' });
  });
});
