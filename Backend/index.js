const express = require('express');
const { connect, db } = require('./db-connection');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;
const currentDB = db();

const adminsPassword = "ADMIN";
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello Pets adoption beckend!')
})

app.post('/users/sign-up', (req, res) => {
    let user = {};
    user.username = req.body?.username;
    user.password = req.body?.password;
    user.firstName = req.body?.firstName;
    user.lastName = req.body?.lastName;
    user.phoneNumber = req.body?.phoneNumber;
    
    // console.log(user);
        
        const collection = currentDB.collection('users');
        collection.insertOne(user).then(() => {
            res.send(user);
        });
    

  });

  app.post('/users/log-in', (req, res) => {
    let user = {};
    user.username = req.body?.username;
    user.password = req.body?.password;
    user.adminPassword = req.body?.adminPassword;
    
    console.log("user that was sent from the front login: ", user);
    const collection = currentDB.collection('users');
    async function run() {
    const result = await collection.find(
      {username : user.username}
      ).toArray();

      console.log("user that was found in DB: ", result);
      if (result[0].password === user.password){
        if(user.adminPassword === adminsPassword){
          result[0].isAdmin = true;
        }
      res.send(result[0]);
    }
    else {
      res.send({username : "not correct password"}); //need to replace it with error or message
    };
    }
    run();


  });


connect().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
});
