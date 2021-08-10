let inputField = document.querySelector("#word-input");
let translateBtn = document.querySelector("#translate-btn");

translateBtn.addEventListener("click", () => {
  const vowels = ["a", "e", "i", "o", "u", "á", "é", "í ", "ó", "ú"];
  let resultArray = [];
  let outputText = document.querySelector("#output");

  let inputText = inputField.value.toLowerCase().split("");
  outputText.innerText = resultArray.splice(0, resultArray.length)
  for (let i = 0; i < inputText.length; i++) {
    resultArray.push(inputText[i])
    for (let v = 0; v < vowels.length; v++) {
      if (inputText[i] === vowels[v]) {
        resultArray.push('p' + inputText[i])
      }
    }
  }
  outputText.innerText = resultArray.join("");
});