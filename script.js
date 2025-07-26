const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible."
];

const quoteBox = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const savequotebtn=document.getElementById("save-quote");
const savedquotelist=document.getElementById("saved-quotes")
const copyquote=document.getElementById("copyquotebtn")
const lightbtn=document.getElementById("light")
const darkbtn=document.getElementById("dark")

let currentquote=""

const sound=new Audio("quotechangesound.mp3")
const savesound=new Audio("savesound.mp3")


darkbtn.addEventListener("change",()=>{
  document.body.classList.remove("ww")
document.body.classList.toggle("yy")
})
lightbtn.addEventListener("change",()=>{
  document.body.classList.remove("yy")
document.body.classList.add("ww")
})
document.body.classList.add("ww")//we add as adefault

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentquote=quotes[randomIndex];
   quoteBox.textContent=currentquote
   sound.currentTime=0
   sound.play();
});

savequotebtn.addEventListener(
  "click",()=>{
    if(currentquote){
    const listitem=document.createElement("li")
    listitem.textContent=currentquote
    savedquotelist.append(listitem)
       savesound.play();
    }
  }
)

)
copyquote.addEventListener("click",()=>{
  navigator.clipboard.writeText(currentquote)
  .then(()=>{
    alert("quote copied to clipboard")
  })
  .catch(err=>{
    alert("failed")
    console.error("copy error",err)
  })


})
