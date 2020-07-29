window.onload = function() {
    document.getElementsByClassName("allb")[0].style="display:block;";
  };

  let shmodal = document.getElementById("shmodal");
  let shbtn = document.getElementById("shcart");
  let shcloser = document.getElementsByClassName("close")[6];
  shbtn.onclick = function() {
    shmodal.style.display = "block";
  }
  shcloser.onclick = function() {
    shmodal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == shmodal) {
      shmodal.style.display = "none";
    }
  }


$(document).ready(function() {
  $('#emailform').submit(function() {
    alert('Thank You For Your Interest! Stay Tuned.');
  });
});
