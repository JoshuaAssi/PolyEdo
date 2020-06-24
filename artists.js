
let guit = document.getElementById("guit");
guit.src = "guit.gif"+"?a="+Math.random();

let landingtab = document.getElementById("landingtab");
let ethtab = document.getElementById("ethtab");
let jantab = document.getElementById("jantab");
let coverbox = document.getElementById("coverbox");

/*function myMove1() {
  coverbox.style.display="block";
    ethtab.style.display ="block";
    let ltpos = 0;
    let etpos = 2000;
    let id = setInterval(frame, 3);
    function frame() {
      if (ltpos == -2000) {
        clearInterval(id);
        landingtab.style.display ="none";
      coverbox.style.display="none";
      } else {
        ltpos-=10; 
        etpos-=10;
        landingtab.style.left = ltpos + 'px'; 
        ethtab.style.left = etpos + 'px';
      }
    }
  }
    guit.src = "guit.gif"+"?a="+Math.random(); //replays guitar
  }*/

  /*function myMove1() {
      $("#landingtab").addClass("outslide");
      ethtab.style.display="block";
  }
  function mm1() {
    $("#ethtab").addClass("inslide");
  }

  function myMove2() {
    $("#ethtab").addClass("outslide");
}*/

$("#landingtab").click(function(){
  coverbox.style="display: block";
  ethtab.style="left: 100vw; display: block";
  $("#landingtab").animate({
    left: '-100vw'
  }, 1200, function(){
    landingtab.style="left: 2000px; display: none";
    coverbox.style="display: none";
  })
  $("#ethtab").animate({
    left: '0px'
  }, 1200)
});

$("#ethtab").click(function(){
  coverbox.style="display: block";
  jantab.style="left: 100vw; display: block";
  $("#ethtab").animate({
    left: '-100vw'
  }, 1200, function(){
    ethtab.style="left: 2000px; display: none";
    coverbox.style="display: none";
  })
  $("#jantab").animate({
    left: '0px'
  }, 1200)
});

$("#jantab").click(function(){
  coverbox.style="display: block";
  landingtab.style="left: 100vw; display: block";
  guit.src = "guit.gif"+"?a="+Math.random(); //replays guitar
  $("#jantab").animate({
    left: '-100vw'
  }, 1200, function(){
    jantab.style="left: 2000px;display:none";
    coverbox.style="display: none";
  })
  $("#landingtab").animate({
    left: '0px'
  }, 1200)
});