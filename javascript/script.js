var good_date_fev = function(){
  var gif_fevrier = document.getElementById("gif_fevrier");
  gif_fevrier.src = "../IMG/otter.gif";
}
var good_date_jan = function(){
  var gif_janvier = document.getElementById("gif_janvier");
  gif_janvier.src = "../IMG/minions.gif";
}
var good_date_mars = function(){
  var gif_mars = document.getElementById("gif_mars");
  gif_mars.src = "../IMG/yes.gif";
}
var good_date_avril = function(){
  var gif_avril = document.getElementById("gif_avril");
  gif_avril.src = "../IMG/happy.gif";
}
var good_date_mai = function(){
  var gif_mai = document.getElementById("gif_mai");
  gif_mai.src = "../IMG/briliant.gif";
}
var good_date_juin = function(){
  var gif_juin = document.getElementById("gif_juin");
  gif_juin.src = "../IMG/outstanding.gif";
}
var good_date_aout = function(){
  var gif_aout = document.getElementById("gif_aout");
  gif_aout.src = "../IMG/bravo.gif";
}
var good_date_septembre = function(){
  var gif_septembre = document.getElementById("gif_septembre");
  gif_septembre.src = "../IMG/passed.gif";
}
var good_date_octobre = function(){
  var gif_octobre = document.getElementById("gif_octobre");
  gif_octobre.src = "../IMG/queen.gif";
}
var good_date_novembre = function(){
  var gif_novembre = document.getElementById("gif_novembre");
  gif_novembre.src = "../IMG/job.gif";
}
var good_date_decembre = function(){
  var gif_decembre = document.getElementById("gif_decembre");
  gif_decembre.src = "../IMG/ok.gif";
}
var setuplisteners = function(){
  var date_fev = document.getElementById("date_fevrier");
  date_fev.addEventListener("click",good_date_fev);
  var date_jan = document.getElementById("date_janvier");
  date_jan.addEventListener("click",good_date_jan);
  var date_mars = document.getElementById("date_mars");
  date_mars.addEventListener("click",good_date_mars);
  var date_avr = document.getElementById("date_avril");
  date_avr.addEventListener("click",good_date_avril);
  var date_mai = document.getElementById("date_mai");
  date_mai.addEventListener("click",good_date_mai);
  var date_juin = document.getElementById("date_juin");
  date_juin.addEventListener("click",good_date_juin);
  var date_aou = document.getElementById("date_aout");
  date_aou.addEventListener("click",good_date_aout);
  var date_sept = document.getElementById("date_septembre");
  date_sept.addEventListener("click",good_date_septembre);
  var date_oct = document.getElementById("date_octobre");
  date_oct.addEventListener("click",good_date_octobre);
  var date_nov = document.getElementById("date_novembre");
  date_nov.addEventListener("click",good_date_novembre);
  var date_dec = document.getElementById("date_decembre");
  date_dec.addEventListener("click",good_date_decembre);
}

window.addEventListener("load",setuplisteners);
