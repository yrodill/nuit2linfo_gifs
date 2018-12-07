var good_date = function(){
  var gif = document.getElementById("gif");
  gif.src = "../IMG/otter.gif";
}

var setuplisteners = function(){
  var date = document.getElementById("date");
  date.addEventListener("click",good_date);
}

window.addEventListener("load",setuplisteners);
