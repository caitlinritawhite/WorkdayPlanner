var dayofWeek = moment().format('dddd');
var dateofMonth = moment().format('MMMM Do')
var todaysDate = dayofWeek + ", " + dateofMonth;

$("#currentDay").text(todaysDate);

$("button").on("click", function () {
  var timeId = $(this).attr("time");

  var userTask = $(this).prev().val();
  localStorage.setItem(timeId, userTask);
});






for (var i = 9; i < 18; i++) {
  // Get current hour
var currentTime = new Date().getHours();

console.log(currentTime)

  var amPm = "am";
  if (i >= 12) {
    amPm = "pm";
  }

  var hour = i;
  if (i > 12) {
    hour -= 12;
  }
  var targetId = "#" + hour + amPm;
  var timeInput = localStorage.getItem(hour + amPm);
  if (timeInput) {
    $(targetId).val(timeInput);
    
  }
    if(i < currentTime){
      $(targetId).addClass("past");
  }

  else if(i > currentTime) {
      $(targetId).addClass("future");
  }

  else{
      $(targetId).addClass("present");
  }
  
}
