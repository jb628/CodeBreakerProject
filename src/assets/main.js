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
  if (answer.value < 10) {
    stringNumber = "000" + stringNumber;
    answer.value = stringNumber;
  } else if (answer.value < 100) {
    stringNumber = "00" + stringNumber;
    answer.value = stringNumber;
  } else if (answer.value < 1000) {
    stringNumber = "0" + stringNumber;
    answer.value = stringNumber;
  } else {
    answer.value = stringNumber;
  }
}

function setMessage(text) {
  let message = document.getElementById('message');
  message.innerHTML = text;
}

function validateInput(input){
  if (input.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }
}


  /*switch (answer.value) {
    case (answer.value < 10):
      console.log('low');
      stringNumber = "000" + stringNumber;
      answer.value = stringNumber;
      break;
    case (answer.value < 100):
      console.log('med');
      stringNumber = "00" + stringNumber;
      answer.value = stringNumber;
      break;
    case (answer.value < 1000):
      console.log('hi');
      stringNumber = "0" + stringNumber;
      answer.value = stringNumber;
      break;
    default:
      console.log(stringNumber);
      answer.value = stringNumber;
  }*/

setHiddenFields();
/*let f = Math.floor(Math.random()*10000);
console.log(f); */
