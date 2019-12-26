const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let collection;

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true } )
  .then(client => collection = client.db('CitiesDB').collection('Cities'))
  .catch(err => console.error(err));


async function insert(name) {
  try {
    if (!name) return;
    console.log("inserting " + name);
    return collection.insertOne({ name })
  } catch (err) {
    console.error(err);
  }
}

async function deleteCity(id) {
  try {
    console.log("deleting " + id);
    return await collection.deleteOne({ _id: new mongodb.ObjectID(id) });
  } catch (err) {
    console.error(err);
  }
}

const selectAll = async () => {
  console.log("selecting all");
  return collection.find({}).toArray()};

const findOne = async (city) => collection.findOne({name: city});

module.exports = {
  insert,
  deleteCity,
  selectAll,
  findOne
};