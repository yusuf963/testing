const googleDataBase = [
  'cat.com',
  'dog.com',
  'flowar.com',
  'catpicture.com',
  'typerace.com',
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

googleSearch('cat', googleDataBase);
module.exports = googleSearch;