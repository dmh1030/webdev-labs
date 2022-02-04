const makeBigger = () => {

   if (document.querySelector('h1').style.fontSize == "") {
      var header = document.querySelector('h1').style.fontSize = "32px";
    }
   var header = document.querySelector('h1').style.fontSize;
   document.querySelector('h1').style.fontSize = parseInt(header) * 1.1 + "px";

   if (document.querySelector('.content').style.fontSize == "") {
      var con = document.querySelector('.content').style.fontSize = "22.4px";
   }
   var con = document.querySelector('.content').style.fontSize;
   document.querySelector('.content').style.fontSize = parseFloat(con) * 1.15 + "px";
};

const makeSmaller = () => {
   if (document.querySelector('h1').style.fontSize == "") {
      var header = document.querySelector('h1').style.fontSize = "32px";
    }
   var header = document.querySelector('h1').style.fontSize;
   document.querySelector('h1').style.fontSize = (parseInt(header) - 3) + "px";

   if (document.querySelector('.content').style.fontSize == "") {
      var con = document.querySelector('.content').style.fontSize = "22.4px";
   }
   var con = document.querySelector('.content').style.fontSize;
   document.querySelector('.content').style.fontSize = (parseFloat(con)- 3) + "px";;
};


document.querySelector('#a1, #a2').addEventListener('click', makeBigger);
document.querySelector('#al, #a2').addEventListener('click', makeSmaller);
