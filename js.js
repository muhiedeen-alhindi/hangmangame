

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
 let div1=document.getElementById("rope")
 let div2 =document.getElementById("body" )  
 let div3=document.getElementById("left-arm")  
 let div4=document.getElementById("right-arm")  
 let div5=document.getElementById("left-leg")  
 let div6=document.getElementById("right-leg") 
 let div7=document.getElementById("head")  
            
             
         

const text = {
    first: 'c',
    second: 'a',
    third:   'p',
  };
 console.log(text.first)

 let x=1
 function checkLetter(button) {
    const letter = button.textContent.toLowerCase(); 
     
    if (letter === text.first) {
        text1.textContent = letter;
       
    } else if (letter === text.second) {
      text2.textContent = letter;
    } else if (letter === text.third) {
        text3.textContent = letter;
    } else {
        if (x <= 7) {
            document.getElementById("div" + x).style.display = "block";
            x++;
    }
  }
}