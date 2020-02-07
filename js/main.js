'use strict';

{
 const myLuck = ['大吉','中吉','末吉','小吉','凶','大凶'];
 let myLuckNum = Math.floor(Math.random() * myLuck.length);  
 

 const btn = document.getElementById('btn');
 btn.addEventListener('click', () => {
    btn.innerHTML = (myLuck[myLuckNum]);
});



}