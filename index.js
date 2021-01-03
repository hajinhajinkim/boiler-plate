const express = require('express')
const app = express()
const port = 3000

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sonhajin99:smartfake99@boilerplate.cu2ek.mongodb.net/boilerplate?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sonhajin99:smartfake99@boilerplate.cu2ek.mongodb.net/boilerplate?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('yeah cool'))
.catch(()=>console.log('whatever'))


app.get('/', (req,res)=>res.send('hello world!'))
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))