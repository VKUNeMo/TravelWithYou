document.body.addEventListener("click", function (e) {
    if (e.target.matches("#loginform")) {
        document.getElementById("loginform").style.visibility = "hidden";
        document.getElementById("signup").style.display = "none";
    }
});
document.getElementById("loginform").style.visibility = "hidden";
document.getElementById("signup").style.display = "none";
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
        location.reload();
    }
}

function dungdeptrai() {
    let a = document.getElementById("signup").style.display;
    if (a == "none") {
        document.getElementById("signup").style.display = "";   
        // location.reload();
    }   
    else  {
        document.getElementById("signup").style.display = "none";
        // location.reload();
    }
}

