document.body.addEventListener("click", function (e) {
    if (e.target.matches("#loginform")) {
        document.getElementById("loginform").style.visibility = "hidden";
        document.getElementById("signup").style.display = "none";
    }
});
document.getElementById("loginform").style.visibility = "hidden";
document.getElementById("signup").style.display = "none";
document.getElementById("sear").onmouseover = function () { mouseover() };
document.getElementById("search-id").onmouseout = function () { mouseout() };

window.addEventListener("load", setTimeout(function () {
    document.getElementById("loadpage").style.display = "none";
}, 2000));




function baodeptrai() {
    let a = document.getElementById("loginform").style.visibility;
    if (a == "hidden") {
        document.getElementById("loginform").style.visibility = "visible";
        // location.reload();
    }
    else {
        document.getElementById("loginform").style.visibility = "hidden";
        location.reload();
    }
};

function dungdeptrai() {
    let a = document.getElementById("signup").style.display;
    if (a == "none") {
        document.getElementById("signup").style.display = "";
        // location.reload();
    }
    else {
        document.getElementById("signup").style.display = "none";
        // location.reload();
    }
};


function mouseover() {
    document.getElementById("sear").style.transform = "translateX(-150px)";
    document.getElementById("search-id").style.opacity = "1";
}

function mouseout() {
    document.getElementById("search-id").style.opacity = "0";
    document.getElementById("sear").style.transform = "translateX(0px)";
}

