
function Getupper(){
   return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function Getlower(){
   return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function Getnumber(){
   return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function GetSpecial(){
    const s = '!@#$%^&*(){}[]=,./';
   return s[Math.floor(Math.random()* s.length) ];
}

const randomF = {
    upper: Getupper,
    lower: Getlower,
    number: Getnumber,
    special: GetSpecial
}

const result = document.getElementById('result');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('num');
const special = document.getElementById('special');
const btnn = document.getElementById('btnn');

btnn.addEventListener('click', () => {
    const lengthstate = +length.value;
    const chckUpper = upper.checked;
    const chckLower = lower.checked;
    const chckNumber = number.checked;
    const chckSpecial = special.checked;
    result.innterText = generatePassword(chckUpper, chckLower, chckNumber, chckSpecial, lengthstate)
});

function generatePassword(upper, lower, number, special, length) {

    let generatedPassword = '';

    const typesCount = upper + lower + number + special;
     
    const typesArr = [{lower}, {upper}, {number}, {special}].filter
    (item => Object.values(item)[0]);
    
    if(typesCount === 0) {
        document.getElementById("result").value = `Chose Settings`;
        return '';
    }

    for(let i=0; i < length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomF[funcName]();
        });
    }
    
    let Final = generatedPassword.slice(0, length);
    console.log(generatedPassword)
    if(length>20){
     document.getElementById("result").value = `Password lenght extended`} 
    else{
         document.getElementById("result").value = `${Final}`;
    }
}