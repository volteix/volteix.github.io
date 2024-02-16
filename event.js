// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if(event.ctrlKey && (event.key === "V" || event.key === "s")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }

  if(event.ctrlKey && (event.key === "O")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }
  if(event.ctrlKey && (event.key === "L" || event.key === "e")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }
  if(event.ctrlKey && (event.key === "T" || event.key === "i" || event.key === "ı")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
  if(event.ctrlKey && (event.key === "E" || event.key === "k")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
  if(event.ctrlKey && (event.key === "I" || event.key === "u")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
});
// stop right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});