/* javascript */
document.querySelector("form").addEventListener("submit", function(event) {
  var nameValue = document.getElementById("parkingNumber").value;
  event.preventDefault();
  var hintOn = false;
  if(nameValue == "87"){
    alert("Congratulations! You are a genius!");
    carMove();
  }
  else{
    alert("Sorry! Try again!");
    if(!hintOn){
      document.getElementById("hint").innerHTML = `Would you like a hint?<br>
      <button onclick="clueAppear()" class="button">Hint</button>`;
      myFunction();
      hintOn = true;
    }
  }
}, false);


function clueAppear() {
  document.getElementById("clue").innerHTML =`Try looking at it from another perspective.`;
}

var id = null;
function carMove() {
  var elem = document.getElementById("redCar");
  var pos = 358;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 550) {
      clearInterval(id);
    } else {
      pos+=2;
      elem.style.top = pos + 'px';
    }
  }
}
