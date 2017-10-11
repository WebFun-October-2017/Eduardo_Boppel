var daysUntilMyBirthday = 60;


/****  USING A WHILE LOOP *****/
while (daysUntilMyBirthday != 0) {
  if (daysUntilMyBirthday > 30) {
    console.log(daysUntilMyBirthday + "days until my birthday. Such a long time... :( ");
  }
  else if(daysUntilMyBirthday > 5) {
    console.log(daysUntilMyBirthday + "DAYS UNTIL MY BIRTHDAY!!  IT'S COMING");
  }
  else if(daysUntilMyBirthday > 0) {
    console.log(daysUntilMyBirthday + "DAYS UNTIL MY BIRTHDAY!! WOOOHOOO");
  }
  daysUntilMyBirthday--;
}

console.log("HAPPPPYYY BIRTHDAAAAY");



/****  USING A FOR LOOP *****
for(var i = daysUntilMyBirthday; i > 0; i--) {
  if (i > 30) {
    console.log(i + "days until my birthday. Such a long time... :( ");
  }
  else if(i > 5) {
    console.log(i + "DAYS UNTIL MY BIRTHDAY!!  IT'S COMING");
  }
  else if(i > 0) {
    console.log(i + "DAYS UNTIL MY BIRTHDAY!! WOOOHOOO");
  }
}
console.log("HAPPPPYYY BIRTHDAAAAY");
*/
