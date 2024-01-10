const express = require('express');
const path = require("path");
const cors = require("cors");
const app = express();
const port = 8080;

const teamsListRoute = require("./src/routes/teams-list");
const teamRoute = require("./src/routes/team");
const editTeam = require("./src/routes/edit-team");
const addTeam = require("./src/routes/add-team");
const deleteTeam = require("./src/routes/delete-team");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));


app.use("/teams", teamsListRoute);
app.use("/team", teamRoute);
app.use("/edit", editTeam);
app.use("/add-team", addTeam);
app.use("/delete", deleteTeam);



app.use((req, res) => {
  res.status(404).send("ERROR 404! Web not found");
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});