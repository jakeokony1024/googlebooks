const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

router.use ("./API", apiRoutes);
