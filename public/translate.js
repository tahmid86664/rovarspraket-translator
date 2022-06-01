const rovTranAreaDom = document.querySelector(".rovTran__textArea");
const engTranAreaDom = document.querySelector(".engTran__textArea"); // trans
const rovSubmitDom = document.querySelector(".rovTran__submit");
const radioButtonDom = document.querySelectorAll('input[name="translator"]');
const jokeDom = document.querySelector(".joke__upper");
const jokeTranslationButtonDom = document.querySelector(".joke__translate");
const jokeLangDom = document.querySelector(".joke__lang");
const generateJokeButtonDom = document.querySelector(".joke__genButton");

let radioID = "rov";
let jokeState = "eng";

radioButtonDom.forEach((r) => {
  r.addEventListener("change", (e) => {
    if (e.target.id === "eng") {
      radioID = "eng";
      rovSubmitDom.innerHTML = "Translate to English";
    } else if (e.target.id === "rov") {
      radioID = "rov";
      rovSubmitDom.innerHTML = "Translate to Rovarspraket";
    }
  });
});

rovSubmitDom.addEventListener("click", async (e) => {
  const text = {
    text: document.getElementById("rovTran__textArea").value,
  };
  try {
    if (radioID === "eng") {
      const res = await axios.post("/api/v1/translate/rovarsprak", text);
      engTranAreaDom.innerHTML = res.data;
    } else if (radioID === "rov") {
      const res = await axios.post("/api/v1/translate/normal", text);
      engTranAreaDom.innerHTML = res.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const showJokes = async () => {
  try {
    const res = await axios.get("/api/v1/translate/jokes");
    jokeDom.innerHTML = res.data;
  } catch (err) {
    console.log(err);
  }
};

showJokes();

jokeTranslationButtonDom.addEventListener("click", async (e) => {
  try {
    const text = { text: jokeDom.innerHTML };
    if (jokeState === "eng") {
      const res = await axios.post("/api/v1/translate/normal", text);
      jokeDom.innerHTML = res.data;
      jokeTranslationButtonDom.innerHTML = "Translate to English";
      jokeLangDom.innerHTML = "Rovarspraket";
      jokeState = "rov";
    } else if (jokeState === "rov") {
      const res = await axios.post("/api/v1/translate/rovarsprak", text);
      jokeDom.innerHTML = res.data;
      jokeTranslationButtonDom.innerHTML = "Translate to Rovarspraket";
      jokeLangDom.innerHTML = "English";
      jokeState = "eng";
    }
  } catch (err) {
    console.log(err);
  }
});

generateJokeButtonDom.addEventListener("click", async (e) => {
  try {
    const res = await axios.get("/api/v1/translate/jokes");
    jokeDom.innerHTML = res.data;
    jokeState = "eng";
    jokeLangDom.innerHTML = "English";
  } catch (err) {
    console.log(err);
  }
});
