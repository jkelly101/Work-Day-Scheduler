// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

var mons = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

var day = days[new Date().getDay()];
var month = mons[new Date().getMonth()];
var date = new Date().getDate();
var currentHour = new Date().getHours();

var currentDate = $("#currentDay");

if (currentHour === 1 || currentHour === 21 || currentHour == 31) {
  currentDate.text(day + ", " + month + " " + date + "st");
} else if (currentHour === 2 || currentHour === 22) {
  currentDate.text(day + ", " + month + " " + date + "nd");
} else if (currentHour === 3 || currentHour === 23) {
  currentDate.text(day + ", " + month + " " + date + "rd");
} else {
  currentDate.text(day + ", " + month + " " + date + "th");
}

var timeBlock = $(".time-block");
var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));

for (var i = 0; i < timeBlock.length; i++) {
  var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));
  if (timeBlockValue < currentHour) {
    $(timeBlock[i]).addClass("past");
  } else if (timeBlockValue === currentHour) {
    $(timeBlock[i]).addClass("present");
  } else if (timeBlockValue > currentHour) {
    $(timeBlock[i]).addClass("future");
  }
}

var taskItems = [ ];

function renderTasks(){
    for (var i = 0; i < timeBlock.length; i++){
        console.log(timeBlockValue[i].children)
    }
}

$(".saveBtn").on("click", function () {
    timeBlock.child[0].text
});

// local storage: use "this" siblings/parents .siblings attr

// WHEN I click into a time block
// THEN I can enter an event
// Use Render() to allow user to enter text when block is clicked

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// Set local storage

// check if there is content
// if there is content, setItem
// else do nothing

// WHEN I refresh the page
// THEN the saved events persist
// getItem
