const express = require('express')
const { connect, db } = require('./db-connection')


const app = express()
const port = 4000

// app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello Pets adoption beckend!')
})


app.post('/users', (req, res) => {
    const user = {};
    user.firstName = req.body?.firstName;
    user.lastName = req.body?.lastName;
    user.password = req.body?.password;
    user.username = req.body?.username;
    const db = db();
    
    const collection = db.collection('users');
    collection.insertOne(user).then(() => {
        res.send(user);
    });

  })

connect().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
});
