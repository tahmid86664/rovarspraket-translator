const express = require("express");
const app = express();

const router = require("./route");

const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/translate", router);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
