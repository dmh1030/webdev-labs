/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const default_button = document.querySelector("#dyslexia-toggle")
default_button.addEventListener('click', () => {
  if (document.body.className == 'dyslexia-mode'){
    document.body.className = '';
  }
  else{
    document.body.className = 'dyslexia-mode';
  }
  
})
