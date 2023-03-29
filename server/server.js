/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

require("./database");

// Parsing JSON data
app.use(bodyParser.json());
app.use(cors());

// API
const users = require("./api/users.js");
app.use("./api/users.js", users);

// Joining Build
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build"));
});

// Checking port
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
