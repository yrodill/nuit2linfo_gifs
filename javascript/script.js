var good_date = function(){
  var gif = document.getElementById("gif");
  gif.src = "../IMG/otter.gif";
}

var lama_show = function(){
  var gif = document.getElementById("gif2");
  gif.src = "../IMG/lama.gif"
}

var reset_july = function(){
  var gif = document.getElementById("gif2");
  gif.src = "../IMG/goatstare.gif";
}

var reset_gif = function(){
  var gif = document.getElementById("gif");
  gif.src = "../IMG/fevrier.gif";
}

var setuplisteners = function(){
  var date = document.getElementById("date");
  var header = document.getElementById("fev");
  var lama2 = document.getElementById("lama");
  var july = document.getElementById("july");
  date.addEventListener("click",good_date);
  header.addEventListener("mouseover",reset_gif);
  lama2.addEventListener("click",lama_show);
  july.addEventListener("mouseover",reset_july);
}

window.addEventListener("load",setuplisteners);
