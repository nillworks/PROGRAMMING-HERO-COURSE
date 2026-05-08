const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

// Mongodb Connection String setup
const uri = `mongodb+srv://CRUD:l9HyYPIiwAJahQOW@cluster0.qrccfdn.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });

    const database = client.db('sampleCRUD');
    const userCollection = database.collection('users');

    // DB get data
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const allUsersData = await cursor.toArray();

      res.send({
        massage: 'successfully data get',
        ok: true,
        allUsersData: allUsersData,
      });
    });

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;

      const query = {
        _id: new ObjectId(id),
      };

      const deleteUser = await userCollection.deleteOne(query);

      res.send(deleteUser);
    });

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.patch('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {
        _id: new ObjectId(id),
      };
      const modifiedUser = req.body;
      const updateDocument = {
        $set: {
          name: modifiedUser.name,
          email: modifiedUser.email,
          role: modifiedUser.role,
          age: modifiedUser.age,
        },
      };

      const result = await userCollection.updateOne(filter, updateDocument);

      res.send(result);
    });

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('data is working');
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
