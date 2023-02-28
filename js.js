

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
    third:   'p',
  };
 console.log(text.first)

 let x=1;
 let s=0;
 function checkLetter(button) {
    const letter = button.textContent.toLowerCase(); 
     
    if (letter === text.first) {
        text1.textContent = letter;
         s++;
         console.log(s)
       
    } else if (letter === text.second) {
      text2.textContent = letter;
          s++;
          console.log(s)
    } else if (letter === text.third) {
        text3.textContent = letter;
        s++;
        console.log(s)
        
    }  else if(s>=2){
      let scores= 
      document.getElementById("scores")
      console.log("scores")
      scores.innerHTML="YOU Win"
     }
    
    
    
    
    else   if (x <= 7){
        
            document.getElementById("div" + x).style.display = "block";

            x++;     
    }
    else if(x>7){
      let scores= document.getElementById("scores")
      console.log("scores")
      scores.innerHTML="YOU LOST"
     }
     
  }
 
   