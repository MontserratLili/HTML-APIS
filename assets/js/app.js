var a = [];
var botones = document.getElementsByClassName("modal");
var b = [];

for (var i = 0; i < botones.length; i++) {
    a[i] = document.getElementsByClassName("modal")[i];
    a[i] = addEventListener("click", publicar); 
}


function publicar() {
    for (var i = 0; i < botones.length; i++) {
        b[i] = document.getElementsByClassName("modal")[i];
        b[i].style.display = "block";
        
    }
}
