function fullscreenchange() {
    alert("test");
    var fullscreen = (window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height);
    if(!fullscreen) 
    {
        if(!passwordChecks()){
            openFullscreen()
            return;
        }
    }
    changeTitle(fullscreen);
}

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

function passwordChecks(){
    var pass = prompt("Enter password to leave fullscreen:");

    if(pass == "leave123")
        return true;
    
    return false;
}

function changeTitle(isfullscreen) {
    if(isfullscreen){
        title.innerHTML = "Now try to leave fullscreen!";
    } else {
        title.innerHTML = "Go fullscreen!";
    }
}

var title = document.getElementById("maintitle");

document.addEventListener("fullscreenchange", function() {
    fullscreenchange();
});

document.addEventListener("mozfullscreenchange", function() {
    fullscreenchange();
});

document.addEventListener("webkitfullscreenchange", function() {
    fullscreenchange();
});

document.addEventListener("msfullscreenchange", function() {
    fullscreenchange();
});

var i = 1;