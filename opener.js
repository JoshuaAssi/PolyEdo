
function betweener(){
    setTimeout(function(){$('#edo').animate({opacity:"1",}, 100, after2wait())}, 300)
}

function sendoff() {
    window.location.replace("main.html")
}
function after2wait() {
    setTimeout(function(){$('#edo').animate({opacity: "0",}, 250, sendoff());}, 600)
}
function after1wait() {
    setTimeout(function(){$('#poly').animate({opacity:"0",}, 100, betweener());}, 600)
}

function openfunc(){
    setTimeout(function(){
    $('#poly').animate({
        opacity: "1",
    }, 100, after1wait()
    )
},500)
}; 
