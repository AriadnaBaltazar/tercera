//JavaScript

$(document).ready(function(e){
document.addEventLitener("deviceready", function(){

$('#beep').tap(function(){
navigator.notification.beep(1);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrate(1000);
});//tap beep

},false); //dviceready
});//ready