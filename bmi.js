// select html element
// create a function 
// use conditional 
// apply bmi fomular and push it in result input
// apply event listener

// let button =document.querySelector('#submit');
//  let para =document.getElementsByClassName('compliment');

// function calculate(){
//     // let weight =document.getElementsByClassName('weight')[0].value;
//     // let height =document.getElementsByClassName('height')[0].value;
//     let weight = parseInt(document.querySelector('.weight').value);
//     let height = parseInt(document.querySelector('.height').value);
//     let result =document.querySelector('.result');
//     let bmi = weight/(height**2);
//     result.textContent = bmi;
// }
// button.addEventListener ("click", calculate):
 
//select all html element needed ib the js 
//pass eventlistener with anom function
//add the fomular for the bmi 
// textcontent the result
let para =document.querySelector('.compliment');
let button = document.querySelector('button');
let result = document.querySelector('.result');
let t1 = document.querySelector('ul');

// let result = document.querySelector('.result');
function calculate(){
let weight =parseInt(document.querySelector('.weight').value);
let height = parseInt(document.querySelector('.height').value);
let bmi = weight/(height**2);
result.textContent = `${bmi} km2`;
if (bmi < 20){
    let reply = 'You are under weight';
    // let blue =  
    para.style.color= 'yellow';
    para.textContent = reply;
}
else if(bmi >= 20 && bmi <= 26){
    para.style.color = 'green';
    para.textContent = 'You look healthy';

}
else if(bmi >= 26 && bmi <= 30){
    para.style.color = 'brown';
    para.textContent = 'Over weight';
}
else {
    para.style.color = 'red';
    para.textContent = 'Obesity';
}
}
button.addEventListener('click', calculate) 
