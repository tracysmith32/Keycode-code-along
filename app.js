// please see the HTML file that links in with this, to make sense of it.

document.addEventListener("keydown", (event) => {
  let numDisplay = document.getElementById("numDisplay");
  let numCode = document.getElementById("codeDisplay");
  let numKey = document.getElementById("keyDisplay");
  let numWhich = document.getElementById("whichDisplay");

  let keyDown = event.key;
  let keyCode = event.code;
  let keyWhich = event.which;

  numDisplay.innerHTML = `<p class ="pressedBtn"> ${keyDown} was presses</p>`;
  numKey.innerHTML = `<p class ="pressedBtn"> ${keyDown} was presses</p>`;
  numCode.innerHTML = `<p class ="pressedBtn"> ${keyCode} was presses</p>`;
  numWhich.innerHTML = `<p class ="pressedBtn"> ${keyWhich} was presses</p>`;
});
