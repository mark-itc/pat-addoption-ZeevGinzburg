const express = require('express');
const { connect, db } = require('./db-connection');
const bodyParser = require('body-parser');
const { signUpValidation, logInValidation} = require("./validations/signUpLogInValidations");
const { profileUpdateValidation } = require("./validations/updateProfileValidations");
const cors = require('cors');
const app = express();
const port = 4000;
const currentDB = db();

const adminsPassword = "ADMIN";
app.use(bodyParser.json());
app.use(cors());

// check

app.get('/', (req, res) => {
  res.send('Hello Pets adoption beckend!')
})

//sign up

app.post('/users/sign-up', (req, res, next) => {
  const isValid = signUpValidation(req.body);
  if (!isValid) {
    console.log(signUpValidation.errors)
    return res.status(400).json(signUpValidation.errors);
  }
  next();
}, (req, res) => {
  const collection = currentDB.collection('users');
  let user = {};
  user.username = req.body?.username;
  // function to check if user already exists maybe can change it to a middleware
  async function findUserNameInDB() {
    const result = await collection.find(
      { username: user.username }
    ).toArray();

    if (result[0]) {
      console.log("alredy exists in DB");
      user.username = 'already signed in';
      res.send(user);
    }
    else {
      user.password = req.body?.password;
      user.firstName = req.body?.firstName;
      user.lastName = req.body?.lastName;
      user.phoneNumber = req.body?.phoneNumber;

      collection.insertOne(user).then(() => {
        res.send(user);
      });
    };
  }
  findUserNameInDB();
  
});

//log in 

app.post('/users/log-in', (req, res, next) => {
  const isValid = logInValidation(req.body);
  if (!isValid) {
    console.log(logInValidation.errors)
    return res.status(400).json(logInValidation.errors);
  }
  next();
}, (req, res) => {
  let user = {};
  user.username = req.body?.username;
  user.password = req.body?.password;
  user.adminPassword = req.body?.adminPassword;

  console.log("user that was sent from the front login: ", user);
  const collection = currentDB.collection('users');
  async function findUserNameInDB(username) {
    const result = await collection.find(
      { username: username }
    ).toArray();

    console.log("user that was found in DB: ", result);
    if (result.length === 0) {
      console.log("username not found");
      res.send({ username: "username not found" }); //need to replace it with error or message
    }
    else if (result[0].password === user.password) {
      if (user.adminPassword === adminsPassword) {
        result[0].isAdmin = true;
      }
      res.send(result[0]);
    }
    else {
      res.send({ username: "The password is incorrect" }); //need to replace it with error or message
    };
  }
  findUserNameInDB(user.username);

});

//update profile
app.post('/users/profile', (req, res, next) => {
  const isValid = profileUpdateValidation(req.body);
  if (!isValid) {
    console.log(profileUpdateValidation.errors)
    return res.status(400).json(profileUpdateValidation.errors);
  }
  next();
  
}, (req, res) => {
  const currentLoggedInUserName = req.body?.currentLoggedInUserName;
  let user = {};
  user.username = req.body?.username;
  console.log("user.username", user.username, typeof(user.username));
  user.currentPassword = req.body?.currentPassword;
  user.newPassword = req.body?.newPassword;
  user.firstName = req.body?.firstName;
  user.lastName = req.body?.lastName;
  user.phoneNumber = req.body?.phoneNumber;
  user.bio = req.body?.bio;
  console.log("user that was sent from the front profile page: ", user);
  console.log("currentLoggedInUserName", currentLoggedInUserName);
  const collection = currentDB.collection('users');
  //its the same func as in the log in, can do it as a ext func and not duplicate myself
  async function findCurrentPasswordInDB(username) {
    const result = await collection.find(
      { username: username }
    ).toArray();

    console.log("user that was found in DB: ", result[0]);
    const currentLoggedInUserDB = result[0];
    // const currentPasswordDB = currentLoggedInUserDB.password;
    return currentLoggedInUserDB;
  }
  findCurrentPasswordInDB(currentLoggedInUserName).then((result) => {
    const passwordDB = result.password;
    if (user.currentPassword === passwordDB) {
      console.log("passwords match!");
      collection.updateOne({ username: currentLoggedInUserName },
        {
          $set: {
            username: user.username,
            password: user.newPassword,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber
          }
        });
      res.send(user);

    }
    else {
      console.log("passwords not match :(")
      res.send({ username: "The password is incorrect" })
    }


  });

  // res.send(user);
});


//

app.post('/pets/add-pet', (req, res) => {
  let pet = {};
  pet.type = req.body?.type;
  pet.name = req.body?.name;
  pet.status = req.body?.status;
  pet.height = req.body?.height;
  pet.weight = req.body?.weight;

  console.log(pet);

  const collection = currentDB.collection('pets');
  collection.insertOne(pet).then(() => {
    res.send(pet);
  });
});

app.get('/pets/search', (req, res) => {
  let searchPetParams = {};
  searchPetParams.type = req.query.type;
  searchPetParams.name = req.query.name;
  searchPetParams.status = req.query.status;
  searchPetParams.height = req.query.height;
  searchPetParams.weight = req.query.weight;
  searchPetParams.searchType = req.query.searchType;

  console.log(searchPetParams);
  collection = currentDB.collection('pets');
  async function findPetInDB() {
    let result;
    if (searchPetParams.searchType === "basic") {
      result = await collection.find(
        {
          type: searchPetParams.type
        }
      ).toArray();
    }
    else if (searchPetParams.searchType === "advanced") {
      result = await collection.find(
        {
          type: searchPetParams.type,
          name: searchPetParams.name,
          status: searchPetParams.status,
          height: searchPetParams.height,
          weight: searchPetParams.weight
        }
      ).toArray();
    }
    if (result.length > 0) {
      res.send(result);
    }
    else {
      result.message = "not found such a pet"
      res.send(result);

    }


  };
  findPetInDB();
});

// dashboard

// app.get('/dashboard/pets', (req, res) => {
//   // let searchPetParams = {};
//   // searchPetParams.type = req.query.type;
//   // searchPetParams.name = req.query.name;
//   // searchPetParams.status = req.query.status;
//   // searchPetParams.height = req.query.height;
//   // searchPetParams.weight = req.query.weight;
//   // searchPetParams.searchType = req.query.searchType;

//   // console.log(searchPetParams);
//   collection = currentDB.collection('pets');
//   async function findPetInDB() {
//     let result;
//     if (searchPetParams.searchType === "basic") {
//       result = await collection.find(
//         {
//           type: searchPetParams.type
//         }
//       ).toArray();
//     }
//     else if (searchPetParams.searchType === "advanced") {
//       result = await collection.find(
//         {
//           type: searchPetParams.type,
//           name: searchPetParams.name,
//           status: searchPetParams.status,
//           height: searchPetParams.height,
//           weight: searchPetParams.weight
//         }
//       ).toArray();
//     }
//     if (result.length > 0) {
//       res.send(result);
//     }
//     else {
//       result.message = "not found such a pet"
//       res.send(result);

//     }


//   };
//   findPetInDB();
// });





connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
});
