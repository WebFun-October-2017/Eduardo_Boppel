var hour = 9;
var minute = 00;
var period = "PM";

var clock;

if (period === "AM") {
  if(hour <= 6) {
      clock = "in the early morning";
  }
  else if(hour > 6 && hour <= 10) {
    clock = "in the morning";
  }
  else {
    clock = "in the late morning";
  }

} else if (period === "PM") {
  if(hour <= 5) {
    clock = "in the afternoon";
  }
  else if (hour > 5 && hour <= 7) {
    clock = "in the evening";
  }
  else {
    clock = "at night";
  }
}


if(minute === 00) {
  if(hour === 12 && period === "AM") {
    console.log("It's Noon!");
  }
  else if(hour === 12 && period === "PM") {
    console.log("It's Midnight!");
  }
  else {
    console.log("It's", hour, "o'clock", clock)
  }

} else if (minute === 15) {
  console.log("It's a quarter past", hour, clock);

} else if (minute === 30) {
  console.log("It's a haft past", hour, clock);

} else if (minute === 45) {
  hour++
  console.log("It's a quarter to", hour, clock);

} else if(minute <= 30) {
  console.log("It's", minute, "past", hour, clock);

} else if(minute > 30) {
  var left = 60 - minute;
  hour++
  console.log("It's", left, "to", hour, clock);
}
