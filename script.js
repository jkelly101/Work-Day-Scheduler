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
// var nine = document.querySelector("#nine");
// var ten = document.querySelector("#ten");
// var eleven = document.querySelector("#eleven");
// var twelve = document.querySelector("#twelve");
// var one = document.querySelector("#one");
// var two = document.querySelector("#two");
// var three = document.querySelector("#three");
// var four = document.querySelector("#four");
// var five = document.querySelector("#five");

var day = days[new Date().getDay()];
var month = mons[new Date().getMonth()];
var date = new Date().getDate();
var currentHour = new Date().getHours();

var currentDate = $("#currentDay");

if (date === 1 || date === 21 || date == 31) {
  currentDate.text(day + ", " + month + " " + date + "st");
} else if (date === 2 || date === 22) {
  currentDate.text(day + ", " + month + " " + date + "nd");
} else if (date === 3 || date === 23) {
  currentDate.text(day + ", " + month + " " + date + "rd");
} else {
  currentDate.text(day + ", " + month + " " + date + "th");
}

var timeBlock = $(".time-block");

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

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// Set local storage

function getTasks() {
  // var storedTaskNine = localStorage.getItem("nineAM");
  // console.log(storedTaskNine);

  // if (storedTaskNine !== null) {
    $("#taskNine").text(localStorage.getItem("taskNine"));
    $("#taskTen").text(localStorage.getItem("taskTen"));
    $("#taskEleven").text(localStorage.getItem("taskEleven"));
  // }
}

// getTaskNine();

// $("#saveNine").on("click", function () {
//   var inputNine = $("#taskNine").val();
//   console.log(inputNine);
//   localStorage.setItem("nineAM", inputNine);
// });

getTasks();

$(".saveBtn").on("click", function (event) {
  var input = $(event.target).prev().children().val();
  var key = $(event.target).prev().children().attr("id");
  console.log(key);
  console.log(input);
  localStorage.setItem(key, input);
});

// // WHEN I click into a time block
// // THEN I can enter an event
// // Use Render() to allow user to enter text when block is clicked

// // check if there is content
// // if there is content, setItem
// // else do nothing

// // WHEN I refresh the page
// // THEN the saved events persist
// // getItem
