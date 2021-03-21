const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:GLYZbztucwXbLXAV@roadmap.du3gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("mongodb connected");
  client.close();
});
