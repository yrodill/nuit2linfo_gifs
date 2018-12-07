var good_date = function(){
  var gif = document.getElementById("gif");
  gif.src = "../IMG/otter.gif";
}

var reset_gif = function(){
  var gif = document.getElementById("gif");
  gif.src = "../IMG/fevrier.gif";
}

var setuplisteners = function(){
  var date = document.getElementById("date");
  var header = document.getElementById("fev");
  date.addEventListener("click",good_date);
  header.addEventListener("mouseover",reset_gif);
}

window.addEventListener("load",setuplisteners);
