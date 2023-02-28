

const a=document.getElementById("a").innerText
const b=document.getElementById("b").innerText
const c=document.getElementById("c").innerText
const d=document.getElementById("d").innerText
const e=document.getElementById("e").innerText
const f=document.getElementById("f").innerText
const g=document.getElementById("g").innerText
const h=document.getElementById("h").innerText
const i=document.getElementById("i").innerText
const j=document.getElementById("j").innerText
const k=document.getElementById("k").innerText
const l=document.getElementById("l").innerText
const m=document.getElementById("m").innerText
const n=document.getElementById("n").innerText
const o=document.getElementById("o").innerText
const p=document.getElementById("p").innerText
let text1=document.getElementById("text1")
let text2=document.getElementById("text2")
let text3=document.getElementById("text3")

const text = {
    first: 'c',
    second: 'a',
    third:   'r',
  };
 console.log(text.first)


 function checkLetter(button) {
    const letter = button.textContent.toLowerCase(); 
     
    if (letter === text.first) {
        text1.textContent = letter;
      alert("woho")
    } else if (letter === text.second) {
      text2.textContent = letter;
    } else if (letter === text.third) {
        text3.textContent = letter;
    } else {
       
    }
  }