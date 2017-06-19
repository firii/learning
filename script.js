var wordsArray = 'this is a word array that you can see the topology of it is various';
var textScreen = document.getElementById('text-screen');
var input = document.getElementById('text-field');

showString(textScreen);

function getRandWord(string) {
  var arr = string.split(' ');
  return arr[Math.floor(Math.random()*arr.length)];
}

function showString(elem) {
  var arr = elem.textContent.split(' ');
  if (arr.length == 3) {
    arr.shift();
    arr.push(getRandWord(wordsArray));
  } else {
    for (var i = 0; i < 3; i++) {
      arr[i] = getRandWord(wordsArray);
    }
  }
  elem.textContent = arr.join(' ');
}

function checkInput(src, inpt) {

}

input.oninput = function () {
  checkInput(textScreen, input);
};
