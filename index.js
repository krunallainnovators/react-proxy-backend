require("dotenv").config({
  override: true
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginHandler = require("./handlers/login");
const protectedHandler = require("./handlers/protected");
const guard = require("./middlewares/guard");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "*"
  })
);
app.use(bodyParser.json());

app.post("/api/login", loginHandler);

app.use(guard).get("/api/protected", protectedHandler);

app.listen(PORT, () => console.log(`Example BFF listening on port ${PORT}!`));
