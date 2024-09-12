
var crsrDt = document.getElementById("crsorDot");
var cursorOutline = document.getElementById("crsorOutlne");
var crsrin = document.getElementById("crsinside");



function fillMouseOutline(){
    cursorOutline.style.width = "200px";
    cursorOutline.style.height = "200px";
    cursorOutline.style.backgroundColor = "#fff";
    crsrDt.style.display = "none";
}
function fillMouseOutlineOut(){
    cursorOutline.style.width = "60px";
    cursorOutline.style.height = "60px";
    cursorOutline.style.background = "none";
    crsrDt.style.display = "block";
}



// Cursor function for Nav Logo Hover Effect

function navLogoHoverCursor(){
    cursorOutline.style.width = "100px";
    cursorOutline.style.height = "100px";
    crsrin.style.opacity = "1";
    crsrDt.style.background = "none";
}
function navLogoHoverCursorOut(){
    cursorOutline.style.width = "60px";
    cursorOutline.style.height = "60px";
    crsrin.style.opacity = "0";
    crsrDt.style.background = "#fff";
}



// function aboutPageCrseActive(){
//     crsrDt.style.display = "none";
//     cursorOutline.style.display = "none";
// }
// function aboutPageCrseUnactive(){
//     crsrDt.style.display = "flex";
//     cursorOutline.style.display = "flex";
// }

var aboutBox = document.getElementById("aboutPageMain");
var abtPagee = document.getElementById("abtPage");

function openAboutMain(){
    // aboutBox.style.display = "flex";
    // aboutBox.style.opacity = "1";
    aboutBox.style.top = "0";
    aboutBox.style.right = "0";
    aboutBox.style.width = "100vw";
    aboutBox.style.height = "100vh";
    aboutBox.style.borderRadius = "0%";
    abtPagee.style.transitionDelay = "0.4s";
    // abtPagee.style.display = "block";
    abtPagee.style.opacity = "1";

}