const express = require("express");
const router = express.Router();
const fun = require("fun-responses");

const { rovarspraketTranslator, englishTranslator } = require("./translator");

router.get("/jokes", async (req, res) => {
  const joke = await fun.joke();
  res.send(joke);
});

router.post("/normal", (req, res) => {
  const text = req.body.text;
  console.log(text);
  const rovTranslated = rovarspraketTranslator(text);
  res.send(rovTranslated);
});

router.post("/rovarsprak", (req, res) => {
  const text = req.body.text;
  console.log(text);
  const engTranslated = englishTranslator(text);
  res.send(engTranslated);
});

module.exports = router;
