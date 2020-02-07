'use strict';
{
 const myLuckNames = ['大吉','中吉','末吉','小吉','凶','大凶'];
 
 const myLuckObj = {
     '大吉': 'わーいやったー',
     '中吉': 'やったー',
     '末吉': '微妙',
     '小吉': 'そんな',
     '凶': 'どーん',
     '大凶': 'どどーん'
 };

 const btn = document.getElementById('btn');
 const message = document.getElementById('message');

 btn.addEventListener('click', () => {
     let myLuckNum = Math.floor(Math.random() * myLuckNames.length);  
     btn.innerHTML = (myLuckNames[myLuckNum]);

     let resultMessage = myLuckObj[myLuckNames[myLuckNum]];
     message.innerHTML = (resultMessage);
});

}
