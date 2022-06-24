const express = require("express");
const app = express();
const path = require("path");
const port = 3003;
const cors = require("./middleware/corsMiddleware");
const Users = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/', express.static('data')); // to serve static files
app.use(cors);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.location("/api/");
  res.sendFile(path.join(__dirname, "api", "data.json"));
});

app.get("/api/users", (req, res) => {
  Users.getUser()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/users/create", (req, res) => {
  Users.createUser(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/users/update/:id", (req, res) => {
  Users.updateUser(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete("/api/users/delete/:id", (req, res) => {
  Users.deleteUser(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
