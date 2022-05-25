
document.getElementById("loginform").style.visibility = "hidden";
window.addEventListener("load", setTimeout(function(){  
    document.getElementById("loadpage").style.display="none";
}, 2000));

function baodeptrai() {
    let a = document.getElementById("loginform").style.visibility;
    if (a == "hidden") {
        document.getElementById("loginform").style.visibility = "visible";   
        // location.reload();
    }   
    else  {
        document.getElementById("loginform").style.visibility = "hidden";
        // location.reload();
    }
}
