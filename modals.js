    
    // Get the modal
    let modal1 = document.getElementById("modal1");
    let modal2 = document.getElementById("modal2");
    let modal3 = document.getElementById("modal3");
    let modal4 = document.getElementById("modal4");
    let modal5 = document.getElementById("modal5");
    let modal6 = document.getElementById("modal6");
    let shmodal = document.getElementById("shmodal");

    // Get the button that opens the modal
    let btn1 = document.getElementById("him1");
    let btn2 = document.getElementById("him2");
    let btn3 = document.getElementById("him3");
    let btn4 = document.getElementById("him4");
    let btn5 = document.getElementById("him5");
    let btn6 = document.getElementById("him6");
    let shbtn = document.getElementById("shcart");
    
    // Get the Xs
    /*let closer1 = document.getElementsByClassName("close")[0];
    let closer2 = document.getElementsByClassName("close")[1];
    let closer3 = document.getElementsByClassName("close")[2];
    let closer4 = document.getElementsByClassName("close")[3];
    let closer5 = document.getElementsByClassName("close")[4];
    let closer6 = document.getElementsByClassName("close")[5];
    let shcloser = document.getElementsByClassName("close")[6]; */

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
let wvsb = document.getElementById("wvsbutton");
let wvmb = document.getElementById("wvmbutton");
let wvlb = document.getElementById("wvlbutton");
let wvxlb = document.getElementById("wvxlbutton");

let wvsval = 0;
let wvmval = 0;
let wvlval = 0;
let wvxlval = 0;


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

let wvqupb = document.getElementById("wvqupb");
let wvqdownb = document.getElementById("wvqdownb");
let wvqnum = document.getElementById("wvqnum");
let nothing = document.getElementById("nothing");
let wvqval = 1; //underneath quantity, qnum is display

let wvprice = 20.00; //price of wv item

let $q1 = 1; //final q of item 1
let $size1; //final size of i1
let $item1 = 0; //1: item in slot, 0: none
let $price1 = 0; //final price of i1

let $q2 = 1;
let $size2;
let $item2 = 0;
let $price2 = 0;

let $q3 = 1;
let $size3;
let $item3 = 0;
let $price3 = 0;

let $q4 = 1;
let $size4;
let $item4 = 0;
let $price4 = 0;

let $q5 = 1;
let $size5;
let $item5 = 0;
let $price5 = 0;

let $totalitems = document.getElementById("totalitems");
let $totalprice = document.getElementById("totalprice");
let $intprice = 0;

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
let wvshcart = document.getElementById("wvshcart");
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
      $price5 = $q5 * wvprice;
      document.getElementById("$price5").innerHTML = "$" + $price5;
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
      $price4 = $q4 * wvprice;
      document.getElementById("$price4").innerHTML = "$" + $price4;
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
      $price3 = $q3 * wvprice;
      document.getElementById("$price3").innerHTML = "$" + $price3;
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
      $price2 = $q2 * wvprice;
      document.getElementById("$price2").innerHTML = "$" + $price2;
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
  $price1 = $q1 * wvprice;
      document.getElementById("$price1").innerHTML = "$" + $price1;
  }
  if (wvsval + wvmval + wvlval + wvxlval == 0) { //if no size is selected: alert
    alert("Please select a size");
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}

let cancel1 = document.getElementById("cancel1");
let cancel2 = document.getElementById("cancel2");
let cancel3 = document.getElementById("cancel3");
let cancel4 = document.getElementById("cancel4");
let cancel5 = document.getElementById("cancel5");
let checkbar = document.getElementById("checkbar");

//cancel shopping cart items
cancel1.onclick = function () {
  $item1 =0;
  shbox1.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}
cancel2.onclick = function () {
  $item2 =0;
  shbox2.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5== 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}
cancel3.onclick = function () {
  $item3 = 0;
  shbox3.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}
cancel4.onclick = function () {
  $item4 =0;
  shbox4.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}
cancel5.onclick = function () {
  $item5 =0;
  shbox5.style ="display: none;";
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) {
    nothing.style="display: block;";
    checkbar.style="display: none";
  }
  if ($q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 == 1) { //qs only added if their corresponding i is occupied, rest terms == 0 and are not counted
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " item";
  }
  else {
    $totalitems.innerHTML = $q1 * $item1 + $q2 * $item2 + $q3 * $item3 + $q4 * $item4 + $q5 * $item5 + " items";
  }
  $intprice = $price1 * $item1 + $price2 * $item2 + $price3 * $item3 + $price4 * $item4 + $price5 * $item5;
  $totalprice.innerHTML = "Total: $" + $intprice;
}
