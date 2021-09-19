/* javascript */
document.querySelector("form").addEventListener("submit", function(event) {
  var nameValue = document.getElementById("parkingNumber").value;
  if(nameValue == "87"){
    alert("Congratulations! You are a genius!");
    carMove();
  }
  else{
    alert("Sorry! Try again!");
    document.getElementById("hint").innerHTML += `Would you like a hint?<br> <button onclick="clueAppear()" class="button">Hint</button>`;
    myFunction();
  }
  event.preventDefault();
}, false);

var id = null;
function myMove() {
  var elem = document.getElementById("car");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
  }
}
// function hintAppear(){
//
// }
function clueAppear() {
  document.getElementById("clue").innerHTML +=`Try looking at it from another perspective.`;
}

var id = null;
function carMove() {
  var elem = document.getElementById("redCar");
  var pos = 158;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}
