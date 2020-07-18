    
    window.onload = function() {
      document.getElementsByClassName("allb")[0].style="display:block;";
    };
    
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
    let closer1 = document.getElementsByClassName("close")[0];
    let closer2 = document.getElementsByClassName("close")[1];
    let closer3 = document.getElementsByClassName("close")[2];
    let closer4 = document.getElementsByClassName("close")[3];
    let closer5 = document.getElementsByClassName("close")[4];
    let closer6 = document.getElementsByClassName("close")[5];
    let shcloser = document.getElementsByClassName("close")[6];

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
shcloser.onclick = function() {
  shmodal.style.display = "none";
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
      if (event.target == shmodal) {
        shmodal.style.display = "none";
      }
    }

//sizebuttons
let m1sb = document.getElementById("m1sbutton");
let m1mb = document.getElementById("m1mbutton");
let m1lb = document.getElementById("m1lbutton");
let m1xlb = document.getElementById("m1xlbutton");

let m1sval = 0;
let m1mval = 0;
let m1lval = 0;
let m1xlval = 0;


//size buttons color and value changes
m1sbutton.onclick = function(event) {
    m1sb.style.background= "#ff6666";
    m1lb.style.background="#f3f49e";
    m1xlb.style.background="#f3f49e";
    m1mb.style.background="#f3f49e";
    m1sval = 1;
    m1mval = 0;
    m1lval = 0;
    m1xlval = 0;
}
m1mbutton.onclick = function(event) {
    m1sb.style.background= "#f3f49e";
    m1mb.style.background="#ff6666";
    m1lb.style.background="#f3f49e";
    m1xlb.style.background="#f3f49e";
    m1sval = 0;
    m1mval = 1;
    m1lval = 0;
    m1xlval = 0;
    
}
m1lbutton.onclick = function(event) {
    m1sb.style.background= "#f3f49e";
    m1mb.style.background="#f3f49e";
    m1lb.style.background="#ff6666";
    m1xlb.style.background="#f3f49e";
    m1sval = 0;
    m1mval = 0;
    m1lval = 1;
    m1xlval = 0;
}
m1xlbutton.onclick = function(event) {
    m1sb.style.background= "#f3f49e";
    m1mb.style.background="#f3f49e";
    m1lb.style.background="#f3f49e";
    m1xlb.style.background="#ff6666";
    m1sval = 0;
    m1mval = 0;
    m1lval = 0;
    m1xlval = 1;
}

let m2sb = document.getElementById("m2sbutton");
let m2mb = document.getElementById("m2mbutton");
let m2lb = document.getElementById("m2lbutton");
let m2xlb = document.getElementById("m2xlbutton");

let m2sval = 0;
let m2mval = 0;
let m2lval = 0;
let m2xlval = 0;
//size buttons color and value changes
m2sbutton.onclick = function(event) {
    m2sb.style.background= "#ff6666";
    m2lb.style.background="#f3f49e";
    m2xlb.style.background="#f3f49e";
    m2mb.style.background="#f3f49e";
    m2sval = 1;
    m2mval = 0;
    m2lval = 0;
    m2xlval = 0;
}
m2mbutton.onclick = function(event) {
    m2sb.style.background= "#f3f49e";
    m2mb.style.background="#ff6666";
    m2lb.style.background="#f3f49e";
    m2xlb.style.background="#f3f49e";
    m2sval = 0;
    m2mval = 1;
    m2lval = 0;
    m2xlval = 0;
    
}
m2lbutton.onclick = function(event) {
    m2sb.style.background= "#f3f49e";
    m2mb.style.background="#f3f49e";
    m2lb.style.background="#ff6666";
    m2xlb.style.background="#f3f49e";
    m2sval = 0;
    m2mval = 0;
    m2lval = 1;
    m2xlval = 0;
}
m2xlbutton.onclick = function(event) {
    m2sb.style.background= "#f3f49e";
    m2mb.style.background="#f3f49e";
    m2lb.style.background="#f3f49e";
    m2xlb.style.background="#ff6666";
    m2sval = 0;
    m2mval = 0;
    m2lval = 0;
    m2xlval = 1;
}

let nothing = document.getElementById("nothing");

let m1qupb = document.getElementById("m1qupb");
let m1qdownb = document.getElementById("m1qdownb");
let m1qnum = document.getElementById("m1qnum");
let m1qval = 1; //underneath quantity, qnum is display
let m1price = 20.00; //price of m1 item

let m2qupb = document.getElementById("m2qupb");
let m2qdownb = document.getElementById("m2qdownb");
let m2qnum = document.getElementById("m2qnum");
let m2qval = 1; //underneath quantity, qnum is display
let m2price = 20.00; //price of m2 item

let $q1 = 1; //final q of item 1
let $size1; //final size of m1
let $item1 = 0; //1: item in slot, 0: none
let $price1 = 0; //final price of m1

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
m1qupb.onclick = function(event) {
  if (m1qval<20) {
    m1qval++;
  }
  m1qnum.innerHTML=m1qval;
}
m1qdownb.onclick = function(event) {
  if (m1qval>1) {
    m1qval --;
  }
  m1qnum.innerHTML=m1qval;
}
m2qupb.onclick = function(event) {//m2
  if (m2qval<20) {
    m2qval++;
  }
  m2qnum.innerHTML=m2qval;
}
m2qdownb.onclick = function(event) {
  if (m2qval>1) {
    m2qval --;
  }
  m2qnum.innerHTML=m2qval;
}

//when m1 cart is clicked:
let m1shcart = document.getElementById("m1shcart");
m1shcart.onclick = function() {
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 5) { //all occupied
    alert("Your Cart is Full");
  }
  if ($item1 + $item2 + $item3 + $item4 == 4) { //m1 through i4 are occupied
    if ($item5 == 0) { //i5 is available
      if (m1sval == 1) { //add m1 values to i5
        $q5 = m1qval;
        $size5 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic5").src="urv1.png";
      $item5 = 1;
      }
      if (m1mval == 1) {
        $q5 = m1qval;
        $size5 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic5").src="urv1.png";
      $item5 = 1;
      }
      if (m1lval == 1) {
        $q5 = m1qval;
        $size5 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic5").src="urv1.png";
      $item5 = 1;
      }
      if (m1xlval == 1) {
        $q5 = m1qval;
        $size5 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "WoahVish -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic5").src="urv1.png";
      $item5 = 1;
      }
      $price5 = $q5 * m1price;
      document.getElementById("$price5").innerHTML = "$" + $price5;
    }
  }
  if ($item1 + $item2 + $item3 == 3) { //i1, i2, and i3 are occupied
    if ($item4 == 0) { //check if i4 is available
      if (m1sval == 1) { //add m1 values to i4
        $q4 = m1qval;
        $size4 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic4").src="urv1.png";
      $item4 = 1;
      }
      if (m1mval == 1) {
        $q4 = m1qval;
        $size4 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic4").src="urv1.png";
      $item4 = 1;
      }
      if (m1lval == 1) {
        $q4 = m1qval;
        $size4 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic4").src="urv1.png";
      $item4 = 1;
      }
      if (m1xlval == 1) {
        $q4 = m1qval;
        $size4 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "WoahVish -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic4").src="urv1.png";
      $item4 = 1;
      }
      $price4 = $q4 * m1price;
      document.getElementById("$price4").innerHTML = "$" + $price4;
    }
  }
  if ($item1 + $item2 == 2) { //m1 and m2 are occupied
    if ($item3 == 0) { //check if i3 is available
      if (m1sval == 1) { //add m1 values to i3
        $q3 = m1qval;
        $size3 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic3").src="urv1.png";
      $item3 = 1;
      }
      if (m1mval == 1) {
        $q3 = m1qval;
        $size3 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic3").src="urv1.png";
      $item3 = 1;
      }
      if (m1lval == 1) {
        $q3 = m1qval;
        $size3 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic3").src="urv1.png";
      $item3 = 1;
      }
      if (m1xlval == 1) {
        $q3 = m1qval;
        $size3 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "WoahVish -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic3").src="urv1.png";
      $item3 = 1;
      }
      $price3 = $q3 * m1price;
      document.getElementById("$price3").innerHTML = "$" + $price3;
    }
  }
  if ($item1 == 1) { //m1 is occupied
    if ($item2 == 0) { //checks if m2 is available
      if (m1sval == 1) { //add m1 values to m2
        $q2 = m1qval;
        $size2 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic2").src="urv1.png";
      $item2 = 1;
      }
      if (m1mval == 1) {
        $q2 = m1qval;
        $size2 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic2").src="urv1.png";
      $item2 = 1;
      }
      if (m1lval == 1) {
        $q2 = m1qval;
        $size2 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic2").src="urv1.png";
      $item2 = 1;
      }
      if (m1xlval == 1) {
        $q2 = m1qval;
        $size2 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "WoahVish -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal1").style="display:none";
      document.getElementById("shpic2").src="urv1.png";
      $item2 = 1;
      }
      $price2 = $q2 * m1price;
      document.getElementById("$price2").innerHTML = "$" + $price2;
    }
  }
  if ($item1 == 0) { //m1 is available
    if (m1sval == 1) { //add m1 values to m1
    $q1 = m1qval;
    $size1 = "Small";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  document.getElementById("shpic1").src="urv1.png";
  $item1 = 1; //m1 is occupied
  }
  if (m1mval == 1) {
    $q1 = m1qval;
    $size1 = "Medium";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  document.getElementById("shpic1").src="urv1.png";
  $item1 = 1;
  }
  if (m1lval == 1) {
    $q1 = m1qval;
    $size1 = "Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  document.getElementById("shpic1").src="urv1.png";
  $item1 = 1;
  }
  if (m1xlval == 1) {
    $q1 = m1qval;
    $size1 = "Extra Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "WoahVish -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal1").style="display:none";
  document.getElementById("shpic1").src="urv1.png";
  $item1 = 1; 
  }
  $price1 = $q1 * m1price;
      document.getElementById("$price1").innerHTML = "$" + $price1;
  }
  if (m1sval + m1mval + m1lval + m1xlval == 0) { //if no size is selected: alert
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
//when m2 cart is clicked:
let m2shcart = document.getElementById("m2shcart");
m2shcart.onclick = function() {
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 5) { //all occupied
    alert("Your Cart is Full");
  }
  if ($item1 + $item2 + $item3 + $item4 == 4) { //i1 through i4 are occupied
    if ($item5 == 0) { //i5 is available
      if (m2sval == 1) { //add m2 values to i5
        $q5 = m2qval;
        $size5 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "Posted -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic5").src="samArtist.png";
      $item5 = 1;
      }
      if (m2mval == 1) {
        $q5 = m2qval;
        $size5 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "Posted -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic5").src="samArtist.png";
      $item5 = 1;
      }
      if (m2lval == 1) {
        $q5 = m2qval;
        $size5 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "Posted -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic5").src="samArtist.png";
      $item5 = 1;
      }
      if (m2xlval == 1) {
        $q5 = m2qval;
        $size5 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item5size").innerHTML = "Posted -" + " " + $size5;
      document.getElementById("item5q").innerHTML ="Quantity:" + " " + $q5;
      document.getElementById("shbox5").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic5").src="samArtist.png";
      $item5 = 1;
      }
      $price5 = $q5 * m2price;
      document.getElementById("$price5").innerHTML = "$" + $price5;
    }
  }
  if ($item1 + $item2 + $item3 == 3) { //i1, i2, and i3 are occupied
    if ($item4 == 0) { //check if i4 is available
      if (m2sval == 1) { //add m2 values to i4
        $q4 = m2qval;
        $size4 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "Posted -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic4").src="samArtist.png";
      $item4 = 1;
      }
      if (m2mval == 1) {
        $q4 = m2qval;
        $size4 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "Posted -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic4").src="samArtist.png";
      $item4 = 1;
      }
      if (m2lval == 1) {
        $q4 = m2qval;
        $size4 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "Posted -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic4").src="samArtist.png";
      $item4 = 1;
      }
      if (m2xlval == 1) {
        $q4 = m2qval;
        $size4 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item4size").innerHTML = "Posted -" + " " + $size4;
      document.getElementById("item4q").innerHTML ="Quantity:" + " " + $q4;
      document.getElementById("shbox4").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic4").src="samArtist.png";
      $item4 = 1;
      }
      $price4 = $q4 * m2price;
      document.getElementById("$price4").innerHTML = "$" + $price4;
    }
  }
  if ($item1 + $item2 == 2) { //i1 and i2 are occupied
    if ($item3 == 0) { //check if i3 is available
      if (m2sval == 1) { //add m2 values to i3
        $q3 = m2qval;
        $size3 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "Posted -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic3").src="samArtist.png";
      $item3 = 1;
      }
      if (m2mval == 1) {
        $q3 = m2qval;
        $size3 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "Posted -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic3").src="samArtist.png";
      $item3 = 1;
      }
      if (m2lval == 1) {
        $q3 = m2qval;
        $size3 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "Posted -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic3").src="samArtist.png";
      $item3 = 1;
      }
      if (m2xlval == 1) {
        $q3 = m2qval;
        $size3 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item3size").innerHTML = "Posted -" + " " + $size3;
      document.getElementById("item3q").innerHTML ="Quantity:" + " " + $q3;
      document.getElementById("shbox3").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic3").src="samArtist.png";
      $item3 = 1;
      }
      $price3 = $q3 * m2price;
      document.getElementById("$price3").innerHTML = "$" + $price3;
    }
  }
  if ($item1 == 1) { //i1 is occupied
    if ($item2 == 0) { //checks if i2 is available
      if (m2sval == 1) { //add m2 values to i2
        $q2 = m2qval;
        $size2 = "Small";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "Posted -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic2").src="samArtist.png";
      $item2 = 1;
      }
      if (m2mval == 1) {
        $q2 = m2qval;
        $size2 = "Medium";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "Posted -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic2").src="samArtist.png";
      $item2 = 1;
      }
      if (m2lval == 1) {
        $q2 = m2qval;
        $size2 = "Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "Posted -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic2").src="samArtist.png";
      $item2 = 1;
      }
      if (m2xlval == 1) {
        $q2 = m2qval;
        $size2 = "Extra Large";
        document.getElementById("nothing").style="display:none";
        document.getElementById("item2size").innerHTML = "Posted -" + " " + $size2;
      document.getElementById("item2q").innerHTML ="Quantity:" + " " + $q2;
      document.getElementById("shbox2").style="display:block";
      document.getElementById("checkbar").style="display:block";
      document.getElementById("modal2").style="display:none";
      document.getElementById("shpic2").src="samArtist.png";
      $item2 = 1;
      }
      $price2 = $q2 * m2price;
      document.getElementById("$price2").innerHTML = "$" + $price2;
    }
  }
  if ($item1 == 0) { //i1 is available
    if (m2sval == 1) { //add m2 values to i1
    $q1 = m2qval;
    $size1 = "Small";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "Posted -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal2").style="display:none";
  document.getElementById("shpic1").src="samArtist.png";
  $item1 = 1; //i1 is occupied
  }
  if (m2mval == 1) {
    $q1 = m2qval;
    $size1 = "Medium";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "Posted -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal2").style="display:none";
  document.getElementById("shpic1").src="samArtist.png";
  $item1 = 1;
  }
  if (m2lval == 1) {
    $q1 = m2qval;
    $size1 = "Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "Posted -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal2").style="display:none";
  document.getElementById("shpic1").src="samArtist.png";
  $item1 = 1;
  }
  if (m2xlval == 1) {
    $q1 = m2qval;
    $size1 = "Extra Large";
    document.getElementById("nothing").style="display:none";
    document.getElementById("item1size").innerHTML = "Posted -" + " " + $size1;
  document.getElementById("item1q").innerHTML ="Quantity:" + " " + $q1;
  document.getElementById("shbox1").style="display:block";
  document.getElementById("checkbar").style="display:block";
  document.getElementById("modal2").style="display:none";
  document.getElementById("shpic1").src="samArtist.png";
  $item1 = 1; 
  }
  $price1 = $q1 * m2price;
      document.getElementById("$price1").innerHTML = "$" + $price1;
  }
  if (m2sval + m2mval + m2lval + m2xlval == 0) { //if no size is selected: alert
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
  if ($item1 + $item2 + $item3 + $item4 + $item5 == 0) { //all empty
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
