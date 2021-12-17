"use strict";
document.getElementById('submitChars').onclick = function (e) {
    e.preventDefault;
    const stringInput = document.getElementById('stringOfChars').value;
    const reversedString = stringInput.split('').reverse().join('');
    const inputValue = document.getElementById('reversedString').value = reversedString;
};
