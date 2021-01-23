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

if (date === 1 || date === 21 || date == 31) {
  currentDate.text(date + ", " + month + " " + date + "st");
} else if (date === 2 || date === 22) {
  currentDate.text(date + ", " + month + " " + date + "nd");
} else if (date === 3 || date === 23) {
  currentDate.text(date + ", " + month + " " + date + "rd");
} else {
  currentDate.text(date + ", " + month + " " + date + "th");
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

// var taskItems = [];

// function renderTasks() {
//   for(i = 0; i === savedTasks.length; i++){
//     console.log(i);
//   }

// }

$(".saveBtn").on("click", function () {
  var savedTasks = $(this).prev().children().val();
  console.log(savedTasks);
  // console.log(this);
  localStorage.setItem("taskItems", savedTasks);
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
