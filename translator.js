const rovarspraketTranslator = (text) => {
  const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const symbols = [
    "!",
    ",",
    ".",
    "?",
    ":",
    ";",
    "'",
    "`",
    "(",
    ")",
    "&",
    "%",
    "@",
    "-",
    "_",
    "[",
    "]",
    "{",
    "}",
    "/",
  ];
  let translatedText = "";

  for (let i = 0; i < text.length; i++) {
    if (
      vowel.includes(text[i]) ||
      text[i] === " " ||
      text[i] === "\n" ||
      symbols.includes(text[i])
    ) {
      translatedText += text[i];
    } else {
      translatedText += text[i] + "o" + text[i];
    }
  }

  return translatedText;
};

const englishTranslator = (text) => {
  let translatedText = "";

  const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "o" && text[i - 1] === text[i + 1]) {
      continue;
    } else {
      if (text[i] === " ") {
        translatedText += text[i];
      } else if (!vowel.includes(text[i]) && text[i - 2] === text[i]) {
        continue;
      } else {
        translatedText += text[i];
      }
    }
  }

  return translatedText;
};

module.exports = {
  rovarspraketTranslator,
  englishTranslator,
};
