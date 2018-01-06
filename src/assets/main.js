let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random()*10000);
  stringNumber = answer.value.toString();
  switch (answer.value) {
    case answer.value < 10:
      stringNumber = "000" + stringNumber;
      answer.value = stringNumber;
      break;
    case answer.value < 100:
      stringNumber = "00" + stringNumber;
      answer.value = stringNumber;
      break;
    case answer.value < 1000:
      stringNumber = "0" + stringNumber;
      answer.value = stringNumber;
      break;
    default:
      answer.value = stringNumber;
  }


}


/*let f = Math.floor(Math.random()*10000);
console.log(f); */
