const fetch = require('node-fetch');
const swapi = require('./api');


//use done to make sure the test is finished before the next test is run or just return a promise
it('should fetch and return the correct people', (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toBe(87);
    done();
  });
});
