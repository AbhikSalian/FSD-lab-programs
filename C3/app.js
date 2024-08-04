const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const dbName = "sampleDB";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection("sampleCollection");
    await insertDocument(collection);
    await findDocuments(collection);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}
async function insertDocument(collection) {
  const result = await collection.insertOne({ name: "John s", age: 5 });
  console.log(`Document inserted with _id: ${result.insertedId}`);
}
async function findDocuments(collection) {
  const result = await collection.find();
  await result.forEach((doc) => {
    console.log(doc);
  });
}
main().catch(console.error);