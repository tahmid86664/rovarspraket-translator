const express = require("express");
const app = express();
const path = require("path");
const router = require("./route");

const port = process.env.PORT || 9000;
const staticPath = path.join(__dirname, "./public");

app.use(express.json());
app.use(express.static(staticPath));
app.use("/api/v1/translate", router);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
