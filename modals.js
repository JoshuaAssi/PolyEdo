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

  /*
  let emaildropbox = document.getElementsByClassName('merchsoonbox')[0];
  let signupb = document.getElementById('signupb');

  signupb.onclick = function(){
    emaildropbox.animate({
      margin: "0 0 -3vw 0",
    }, 200)
  }*/

  /*
  $("#emailsubb").on("click", function() {
    message = $("#emailform").serialize();
    $.ajax({
        url: "https://formspree.io/xdowyqqz", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for signing up! Stay tuned');
    return false;
}); */

$(document).ready(function() {
  $('#emailform').submit(function() {
    alert('Thank You For Your Interest! Stay Tuned.');
  });
});
