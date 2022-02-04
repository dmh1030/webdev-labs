/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const default_button = document.querySelector("#default")
default_button.addEventListener('click', () => {
   document.body.className = '';
})

const desert = document.querySelector("#desert")
desert.addEventListener('click', () => {
   document.body.className = "desert";
})

const ocean = document.querySelector("#ocean")
ocean.addEventListener('click', () => {
   document.body.className = 'ocean';
})

const hc = document.querySelector("#high-contrast")
hc.addEventListener('click', () => {
   document.body.className = 'high-contrast';
})

