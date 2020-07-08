const express = require('express');
const app = express();
const port = 3000;

const users = [
    {
        name: "Ford",
        passWord: "DontPanic",
        email: "FordP@haertOfGold.com"
    },
    {
        name: "Aurther",
        passWord: "Aim&Miss",
        email: "AurtherD@haertOfGold.com"
    },
    {
        name: "Marvin",
        passWord: "AlanRickman",
        email: "Marvin@haertOfGold.com"
    }        
]

app.use(express.json());
app.get('/', (req, res) => res.send('5 Books and 1 Movie'));

//app.METHOD(PATH, HANDLER)
app.get('/users', (req, res) => res.send(users));

//POST to creat a new user
app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.send(users[users.length -1])
    })

// PUT to creat or replace existing user info
app.put('/users/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    users.splice(index, 1, body);
    res.send(users[index])
    })

//PATCH to modify existing use info ie. password
app.patch('/users/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    const keys = Object.keys(body);
    keys.forEach(key => users[index][key] = body[key]);
    res.send(users[index])
    });

//DELETE to remove a user
app.delete('/users/:userID', (req, res) => {
    const index = req.params.userID;
    const deletedUser = users[index];
    users.splice(index, 1);
    res.send(deletedUser)
    });

app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`));