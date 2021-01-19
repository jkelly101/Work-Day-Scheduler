// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

var mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var nine = document.querySelector("#9");
var ten = document.querySelector("#10");
var eleven = document.querySelector("#11");
var twelve = document.querySelector("#12");
var one = document.querySelector("#1");
var two = document.querySelector("#2");
var three = document.querySelector("#3");
var four = document.querySelector("#4");
var five = document.querySelector("#5");


mons[(new Date()).getMonth()]

days[(new Date()).getDay()]


if(i === 12){
    chosenTag.css(["background-color", "red"]);
    chosenTag.addClass("red-class");
}
if((new Date()).getHours() === i){ // uses military time 0-23 for hours
    chosenTag.addClass("red-class");
}

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// 9am - 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// Render()
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// get local storage