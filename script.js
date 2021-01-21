// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

var mons = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var nine = document.querySelector("#nine");
var ten = document.querySelector("#ten");
var eleven = document.querySelector("#eleven");
var twelve = document.querySelector("#twelve");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");

days[new Date().getDay()]; 
mons[new Date().getMonth()];
new Date().getDate();
var currentHour = new Date().getHours();

var currentDate = $("#currentDay");

currentDate.text(days[new Date().getDay()] + ", " + mons[new Date().getMonth()] + " " + new Date().getDate() + "th");

var timeBlock = $(".time-block");
// console.log(timeBlock);
 for(var i = 0; i < timeBlock.length; i++){
    var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));
    if (timeBlockValue < currentHour){
        $(timeBlock[i]).addClass("past");
    }
    else if (timeBlockValue === currentHour){
        $(timeBlock[i]).addClass("present");
    }
    else if (timeBlockValue > currentHour){
        $(timeBlock[i]).addClass("future");
    }

 }

 //local storage "this" siblings/parents .siblings attr

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// Use date object()

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// 9am - 5pm

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// Assign each block a time.
// A style in JS to change color as time changes. Date object?

// WHEN I click into a time block
// THEN I can enter an event
// Use Render() to allow user to enter text when block is clicked

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// Set local storage

// WHEN I refresh the page
// THEN the saved events persist
// get local storage
