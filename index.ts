 document.getElementById('submitChars')!.onclick = function(e) {
    e.preventDefault;
    const stringInput : String = (<HTMLInputElement>document.getElementById('stringOfChars')).value;
    const reversedString = stringInput.split('').reverse().join('');
    const inputValue = (<HTMLInputElement>document.getElementById('reversedString')).value = reversedString;
    
}​;