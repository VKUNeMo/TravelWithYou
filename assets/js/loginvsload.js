document.body.addEventListener("click", function (e) {
    if (e.target.matches("#loginform")) {
        document.getElementById("loginform").style.visibility = "hidden";
        document.getElementById("signup").style.display = "none";
    }
});
document.getElementById("loginform").style.visibility = "hidden";
document.getElementById("signup").style.display = "none";
// document.getElementById("sear").onmouseover = function () { mouseover() };
// document.getElementById("search-id").onmouseout = function () { mouseout() };

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

function myFunction() {
    var element = document.getElementById("nav-bar");
    element.classList.toggle("active");
    var element = document.getElementById("nav-icon");
    element.classList.toggle("transform_180");
 }


// function mouseover() {
//     if (screen.width > 1080) {
//         document.getElementById("sear").style.transform = "translateX(-150px)";
//     document.getElementById("search-id").style.opacity = "1";
//     }
// }

// function mouseout() {
//     if (screen.width > 1080) {
//     document.getElementById("search-id").style.opacity = "0";
//     document.getElementById("sear").style.transform = "translateX(0px)";
//     }
// }

// var icon__menu = $('#sear')
// var menu__navbar = $("#navbar__1000");
    // document.getElementById("sear").click(() => {
    //     document.getElementById("sear").toggleClass('transform__180');
    //   menu__navbar.toggleClass('transform__0')
//    })
