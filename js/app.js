// immediate invoked function
// will create local scope so does not pollute global scope
(function (){


// target hexValues id
const hexValue = document.getElementById('hex-value');
    // target btn id
const btn = document.getElementById('btn');
    // add event listener button. But this time use a callBack function
    btn.addEventListener('click', createHex);
    function createHex() {
// create a jasvascript that produces the color
// create a var that contains the numbers
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
let hexColor = '#';
for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * hexValues.length);
    console.log(random);
    // show the values
    hexColor += hexValues[random];
 }
 document.body.style.backgroundColor = hexColor;
 hexValue.textContent = hexColor;
}

})();