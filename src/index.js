import './style.css';
import './style.less';
import Data from './assets/data.csv';
import Notes from './assets/data.xml';
console.log(Data,Notes)
import helloWord from './helloWord.js';
import liucheng from './assets/liucheng.png';
import news from './assets/news.jpg';
import word from './assets/word.txt';
import exportFinance from './assets/exportFinance.svg'
helloWord()
const img2 = document.createElement('img')
img2.style.cssText = 'width:400px;height:400px'
img2.src = exportFinance;
document.body.appendChild(img2)
document.body.classList.add('hello')
const div = document.createElement('div')
div.style.cssText = 'width:200px;height:200px;'
div.classList.add('block-bg')
div.textContent = word;
document.body.appendChild(div)
const img3 = document.createElement('img');
img3.style.cssText = 'width:600px;height:200px'
img3.src = news;
document.body.appendChild(img3)
















const img = document.createElement('img');
img.style.cssText = 'width:600px;height:200px'
img.src = liucheng;
document.body.appendChild(img)
import _ from 'lodash'
console.log(_.join(['another1','monder1','here1'],' '))
import './async.js'
const button = document.createElement('button')
button.textContent='点击执行时间'
button.addEventListener('click',()=>{
    import('./math.js').then(({reduce})=>{
       console.log(reduce(10,7))
    })
})
document.body.appendChild(button)
