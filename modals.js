    
    // Get the modal
    var modal1 = document.getElementById("modal1");
    var modal2 = document.getElementById("modal2");
    var modal3 = document.getElementById("modal3");
    var modal4 = document.getElementById("modal4");
    var modal5 = document.getElementById("modal5");
    var modal6 = document.getElementById("modal6");
    var shmodal = document.getElementById("shmodal");

    // Get the button that opens the modal
    var btn1 = document.getElementById("him1");
    var btn2 = document.getElementById("him2");
    var btn3 = document.getElementById("him3");
    var btn4 = document.getElementById("him4");
    var btn5 = document.getElementById("him5");
    var btn6 = document.getElementById("him6");
    var shbtn = document.getElementById("shcart");
    
    // Get the Xs
    /*var closer1 = document.getElementsByClassName("close")[0];
    var closer2 = document.getElementsByClassName("close")[1];
    var closer3 = document.getElementsByClassName("close")[2];
    var closer4 = document.getElementsByClassName("close")[3];
    var closer5 = document.getElementsByClassName("close")[4];
    var closer6 = document.getElementsByClassName("close")[5];
    var shcloser = document.getElementsByClassName("close")[6]; */

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
    shbtn.onclick = function() {
      shmodal.style.display = "block";
    }


    // When the user clicks on <span> (x), close the modal
    /*closer1.onclick = function() {
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
shcloser.onclick = function() {
  shmodal.style.display = "none";
}
*/
    
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
      if (event.target == shmodal) {
        shmodal.style.display = "none";
      }
    }

//sizebuttons
var wvsb = document.getElementById("wvsbutton");
var wvmb = document.getElementById("wvmbutton");
var wvlb = document.getElementById("wvlbutton");
var wvxlb = document.getElementById("wvxlbutton");

var wvsval = 0;
var wvmval = 0;
var wvlval = 0;
var wvxlval = 0;


//size buttons color and value changes
wvsbutton.onclick = function(event) {
    wvsb.style.background= "#ff6666";
    wvlb.style.background="#f3f49e";
    wvxlb.style.background="#f3f49e";
    wvmb.style.background="#f3f49e";
    wvsval = 1;
    wvmval = 0;
    wvlval = 0;
    wvxlval = 0;
}
wvmbutton.onclick = function(event) {
    wvsb.style.background= "#f3f49e";
    wvmb.style.background="#ff6666";
    wvlb.style.background="#f3f49e";
    wvxlb.style.background="#f3f49e";
    wvsval = 0;
    wvmval = 1;
    wvlval = 0;
    wvxlval = 0;
    
}
wvlbutton.onclick = function(event) {
    wvsb.style.background= "#f3f49e";
    wvmb.style.background="#f3f49e";
    wvlb.style.background="#ff6666";
    wvxlb.style.background="#f3f49e";
    wvsval = 0;
    wvmval = 0;
    wvlval = 1;
    wvxlval = 0;
}
wvxlbutton.onclick = function(event) {
    wvsb.style.background= "#f3f49e";
    wvmb.style.background="#f3f49e";
    wvlb.style.background="#f3f49e";
    wvxlb.style.background="#ff6666";
    wvsval = 0;
    wvmval = 0;
    wvlval = 0;
    wvxlval = 1;
}

var wvqupb = document.getElementById("wvqupb");
var wvqdownb = document.getElementById("wvqdownb");
var wvqnum = document.getElementById("wvqnum");
var nothing = document.getElementById("nothing");
var wvqval = 1; //underneath quantity, qnum is display

var $q1 = 1; //final q of item 1
var $size1; //final size of i1
var $item1 = 0; //1: item in slot, 0: none

var $q2 = 1;
var $size2;
var $item2 = 0;

var $q3 = 1;
var $size3;
var $item3 = 0;

var $q4 = 1;
var $size4;
var $item4 = 0;

var $q5 = 1;
var $size5;
var $item5 = 0;


//up button upincs q if q<20, down downincs q if q>1
wvqupb.onclick = function(event) {
  if (wvqval<20) {
    wvqval++;
  }
  wvqnum.innerHTML=wvqval;
}
wvqdownb.onclick = function(event) {
  if (wvqval>1) {
    wvqval --;
  }
  wvqnum.innerHTML=wvqval;
}


//when wv cart is clicked:
var wvshcart = document.getElementById("wvshcart");
wvshcart.onclick = function() {
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 5) { //all occupied
    alert("Your Cart is Full");
  }
  if ($item1 + $item2 + $item3 + $item4 == 4) { //i1 through i4 are occupied
    if ($item5 == 0) { //i5 is available
      if (wvsval == 1) { //add wv values to i5
        $q5 = wvqval;
        $size5 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item5 = 1;
      }
      if (wvmval == 1) {
        $q5 = wvqval;
        $size5 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item5 = 1;
      }
      if (wvlval == 1) {
        $q5 = wvqval;
        $size5 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item5 = 1;
      }
      if (wvxlval == 1) {
        $q5 = wvqval;
        $size5 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item5 = 1;
      }
    }
  }
  if ($item1 + $item2 + $item3 == 3) { //i1, i2, and i3 are occupied
    if ($item4 == 0) { //check if i4 is available
      if (wvsval == 1) { //add wv values to i4
        $q4 = wvqval;
        $size4 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item4 = 1;
      }
      if (wvmval == 1) {
        $q4 = wvqval;
        $size4 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item4 = 1;
      }
      if (wvlval == 1) {
        $q4 = wvqval;
        $size4 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item4 = 1;
      }
      if (wvxlval == 1) {
        $q4 = wvqval;
        $size4 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item4 = 1;
      }
    }
  }
  if ($item1 + $item2 == 2) { //i1 and i2 are occupied
    if ($item3 == 0) { //check if i3 is available
      if (wvsval == 1) { //add wv values to i3
        $q3 = wvqval;
        $size3 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item3 = 1;
      }
      if (wvmval == 1) {
        $q3 = wvqval;
        $size3 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item3 = 1;
      }
      if (wvlval == 1) {
        $q3 = wvqval;
        $size3 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item3 = 1;
      }
      if (wvxlval == 1) {
        $q3 = wvqval;
        $size3 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item3 = 1;
      }
    }
  }
  if ($item1 == 1) { //i1 is occupied
    if ($item2 == 0) { //checks if i2 is available
      if (wvsval == 1) { //add wv values to i2
        $q2 = wvqval;
        $size2 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item2 = 1;
      }
      if (wvmval == 1) {
        $q2 = wvqval;
        $size2 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item2 = 1;
      }
      if (wvlval == 1) {
        $q2 = wvqval;
        $size2 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item2 = 1;
      }
      if (wvxlval == 1) {
        $q2 = wvqval;
        $size2 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      $item2 = 1;
      }
    }
  }
  if ($item1 == 0) { //i1 is available
  if (wvsval == 1) { //add wv values to i1
    $q1 = wvqval;
    $size1 = "Small";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  $item1 = 1; //i1 is occupied
  }
  if (wvmval == 1) {
    $q1 = wvqval;
    $size1 = "Medium";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  $item1 = 1;
  }
  if (wvlval == 1) {
    $q1 = wvqval;
    $size1 = "Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  $item1 = 1;
  }
  if (wvxlval == 1) {
    $q1 = wvqval;
    $size1 = "Extra Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  $item1 = 1; 
  }
  }
  if (wvsval + wvmval + wvlval + wvxlval == 0) { //if no size is selected: alert
    alert("Please select a size");
  }
}

var cancel1 = document.getElementById("cancel1");
var cancel2 = document.getElementById("cancel2");
var cancel3 = document.getElementById("cancel3");
var cancel4 = document.getElementById("cancel4");
var cancel5 = document.getElementById("cancel5");
var checkbar = document.getElementById("checkbar");

//cancel shopping cart items
cancel1.onclick = function () {
  $item1 =0;
  shbox1.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";

  }
}
cancel2.onclick = function () {
  $item2 =0;
  shbox2.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
}
cancel3.onclick = function () {
  $item3 = 0;
  shbox3.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
}
cancel4.onclick = function () {
  $item4 =0;
  shbox4.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
}
cancel5.onclick = function () {
  $item5 =0;
  shbox5.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
}
