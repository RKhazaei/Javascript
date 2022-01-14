console.log("test");
console.log ("main loaded")

let myName = 'Reza Khazaei';
let todayTemperature = '22 graden celsius';
alert (todayTemperature);

let temp;
temp = 12;
temp += 5;

let result = prompt('Wat is je naam?');
alert(`Jouw naam is ${result}`);

const cookie = confirm('Wilt u cookies bewaren?');
if (cookie) 
{alert('U wilt cookies bewaren');}
else 
{alert('U wilt geen cookies');}

const myCity = 'Den Haag';
alert('je woont in ' + myCity);

const x = 4;
const y = 2;

let z = prompt("vul een getal in");

const machtX = x**x;
const machtY = y**y;
const machtZ = z**z;

document.body.innerHTML += `de macht van ${x} is ${machtX}. `;
document.body.innerHTML += `de macht van ${y} is ${machtY}. `;
document.body.innerHTML += `de macht van ${z} is ${machtZ}. `;

let age = prompt('Wat is uw leeftijd?');
const birthyear = '2021' - age;
console.log("geboortejaar " + birthyear);

document.body.innerHTML += `Je bent geboren in: ${birthyear} of ${birthyear - 1}  `

const v = 4;
const w = 9;

document.body.innerHTML += `${v} + ${w} is ${v+w}<br> `;
document.body.innerHTML += `${v} x ${w} is ${v*w}<br> `;
document.body.innerHTML += `${w} % ${v} is ${w%v} <br> `;
document.body.innerHTML += `${v} / ${w} is ${v/w}<br> `;
document.body.innerHTML += `${v} macht ${w} is ${v**w}<br> `;
 
let e = prompt("vul een getal in ");
const t = 2
alert(`${e} / ${t} is ${e%t} `);    

let x = 5;
x = 5 + 5 + 6;
console.log("vraag 1 "+ x);
x = x + 5;
console.log("vraag 2 "+ x);
x = 4 + 1 + (4 * 2);
console.log("vraag 3 "+ x);
x = x + ' Hoi ';
console.log("vraag 4 "+ x);
x = 3 + 2 + (4 * 2) + x + 1;
console.log("vraag 5 "+ x);
x -= 3;
console.log("vraag 6 "+ x);
x = x +=    x * 3;
console.log("vraag 7 "+ x);


let age = prompt("how old are you?")
if (age >=18 && age<21 ){
    document.body.innerHTML += `<p>je mag bier. </p>`;
}
else if (age >= 21) {
document.body.innerHTML += `<p> je mag sterk drank. </p>`
}
else {
    document.body.innerHTML += `<p> je mag geen alchohol. </p> `
}
  

const time = prompt("hoelaat is het in uuren?")

if (time >= 6 && time < 12){
    console.log("het is ochtend")
}

else if (time >=12 && time <18){
    console.log("het is middag")
}

else if (time >=18 && time <24){
    console.log ("het is avond")
}

else if (time >=0 && time < 6 || time ===24){
    console.log("het is nacht")
}

else{
    console.log("het is niet ochtend en niet middag")
}

let price = 100;
let inputUser = prompt("vul in geen hoog of laag")
const hoog = 1.21;
const laag = 1.09;
const geen = 1.0;
let btwPrice;
let priceInBTW;

if(inputUser.toLowerCase()=== "geen"){
priceInBTW = price * geen;
document.body.innerHTML += `the price is ${price} with a tax of ${geen}.<br>
The price including tax  ${priceInBTW} `
}

else if(inputUser.toLowerCase()=== "laag"){
    priceInBTW = price * laag;
    document.body.innerHTML += `the price is ${price} with a tax of ${laag}.<br>
    The price including tax  ${priceInBTW} `
    }
else if(inputUser.toLowerCase()=== "high"){
    priceInBTW = price * hoog;
    document.body.innerHTML += `the price is ${price} with a tax of ${hoog}.<br>
    The price including tax ${priceInBTW} `
    }


else{
    console.log("incorrect input")
}

// const getal1 = 1;
// const getal2 = 2;

// if(getal1 > getal2){
//     document.body.innerHTML += `${getal1}`;
// }
// else if (getal2 > getal1){
//     document.body.innerHTML += `${getal2} `;

// }
// else {
//     document.body.innerHTML += `gelijk: ${getal1}`;
// }

// const animal = prompt(`vull een dier in `)

// if (animal.toLowerCase()==="paard" ) {
//     document.body.innerHTML += `het paard hinnikt`

// }

// else if (animal.toLowerCase()==="kikker" ) {
//     document.body.innerHTML += `de kikker kwaakt`

// }
// else if (animal.toLowerCase()==="koe" ) {
//     document.body.innerHTML += `De koe loeit`

// }
// else if (animal.toLowerCase()==="leeuw" ) {
//     document.body.innerHTML += `De leeuw brult`

// }
// else if (animal.toLowerCase()==="slang" ) {
//     document.body.innerHTML += `de slang slist`

// }
// else if (animal.toLowerCase()==="goudvis" ) {
//     document.body.innerHTML += `de goudvis blubt`

// }

// else {
//     document.body.innerHTML += `dit dier bestaat niet`
// }






// Kikker (kwaakt)
// Paard (hinnikt)
// Koe (loeit)
// Leeuw (brult)
// Slang (slist)
// Goudvis (blubt)