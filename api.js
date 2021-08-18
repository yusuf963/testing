const fetch = require('node-fetch');

const getPeople = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people/');
  const data = await getRequest.json();
  console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

const getPeoplePromis = (fetch) => {
  return fetch('http://swapi.py4e.com/api/people/')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

getPeoplePromis(fetch)
module.exports = {
  getPeople,
  getPeoplePromis,
};
