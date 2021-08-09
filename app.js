let inputField = document.querySelector("#word-input");
const vowels = ["a", "e", "i", "o", "u", "á", "é", "í ", "ó", "ú"];
let resultArray = [];
let outputText = document.querySelector("#output");
let translateBtn = document.querySelector("#translate-btn");

translateBtn.addEventListener("click", translate);

function translate(e) {
  e.preventDefault()
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
}


// function translation(e) {
//   e.preventDefault();
//   let inputTextField = inputField.value.split("");

//   outputText.innerText = resultArray.splice(0, resultArray.length)

//   for (let letter = 0; letter < inputTextField.length; letter++) {
//     for (let vowel = 0; vowel < vowels.length; vowel++) {
//       if (inputTextField[letter] === vowels[vowel]) {
//         if (inputTextField[letter] === "e") {
//           resultArray.push("ee");
//         } else if (inputTextField[letter] === "u") {
//           resultArray.push("uu");
//         } else if (inputTextField[letter] === " ") {
//           resultArray.push(" ");
//         } else {
//           resultArray.push(inputTextField[letter]);
//         }
//       }
//     }
//   }

//   outputText.innerText = resultArray.join("").toUpperCase();
// }