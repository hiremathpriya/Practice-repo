

$(document).ready(function(){

var count = parseInt($("#num").html());
var breakTime = parseInt($("#breakNum").html());

$("#reset").hide();


$("#start").click(function() {
  var counter = setInterval(timer, 1000);

  function timer(){
    //hide variables
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum,#title1").hide();
    $("#timeType").html("session Time");

    count -=1;
$("#num").html(count);
if(count === 0){
  clearInterval(counter);
}
$("#num").html(count);
  }

});

/*$("#start").click(function() {
  var stop = setInterval(timer2, 1000);

function timer2(){
  //hide variables
  $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum,#title1").hide();
//  $("#timeType").html("session Time");
  $("#timeType2").html("Break Time");
  count -=1;
$("#num").html(count);
if(count === 0){
clearInterval(counter);
}
$("#num").html(count);
}
});*/



$("#minus5Clock").click(function(){
  if(count > 5){
    count -=5;
  $("#num").html(count);
  console.log(count);
}

});


$("#add5Clock").click(function(){
    count +=5;
  $("#num").html(count);

});



$("#minus5Break").click(function(){
  if(breakTime > 5){
    breakTime -=5;
  $("#breakNum").html(breakTime);

}

});


$("#add5Break").click(function(){
    breakTime +=5;
  $("#breakNum").html(breakTime);


});
});
