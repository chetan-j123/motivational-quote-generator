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

let currentquote=""


newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentquote=quotes[randomIndex];
   quoteBox.textContent=currentquote
});

savequotebtn.addEventListener(
  "click",()=>{
    if(currentquote){
    const listitem=document.createElement("li")
    listitem.textContent=currentquote
    savedquotelist.append(listitem)
    }
  }
)
