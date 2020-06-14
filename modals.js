    // Get the modal
    var modal1 = document.getElementById("modal4");
    var modal2 = document.getElementById("modal5");
    var modal3 = document.getElementById("modal6");
    var modal4 = document.getElementById("modal4");
    var modal5 = document.getElementById("modal5");
    var modal6 = document.getElementById("modal6");

    // Get the button that opens the modal
    var btn1 = document.getElementById("him1");
    var btn2 = document.getElementById("him2");
    var btn3 = document.getElementById("him3");
    var btn4 = document.getElementById("him4");
    var btn5 = document.getElementById("him5");
    var btn6 = document.getElementById("him6");
    
    // Get the <span> element that closes the modal
    var closer1 = document.getElementsByClassName("close")[0];
    var closer2 = document.getElementsByClassName("close")[1];
    var closer3 = document.getElementsByClassName("close")[2];
    var closer4 = document.getElementsByClassName("close")[3];
    var closer5 = document.getElementsByClassName("close")[4];
    var closer6 = document.getElementsByClassName("close")[5];
    // When the user clicks the button, open the modal 
    btn1.onclick = function() {
      modal1.style.display = "block";
    }
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    btn3.onclick = function() {
      modal3.style.display = "block";
    }
    btn4.onclick = function() {
      modal4.style.display = "block";
    }
    btn5.onclick = function() {
      modal5.style.display = "block";
    }
    btn6.onclick = function() {
      modal6.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    closer1.onclick = function() {
      modal1.style.display = "none";
    }
    closer2.onclick = function() {
      modal2.style.display = "none";
    }
    closer3.onclick = function() {
      modal3.style.display = "none";
    }
    closer4.onclick = function() {
      modal4.style.display = "none";
    }
    closer5.onclick = function() {
      modal5.style.display = "none";
    }
    closer6.onclick = function() {
      modal6.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
      if (event.target == modal4) {
        modal4.style.display = "none";
      }
      if (event.target == modal5) {
        modal5.style.display = "none";
      }
      if (event.target == modal6) {
        modal6.style.display = "none";
      }
    }