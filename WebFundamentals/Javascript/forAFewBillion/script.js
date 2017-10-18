var reward = 0.01;
var earn = 0.01;
var days = 0;

for(var i = 2; i<=30; i++) {
  reward = reward * 2;
  earn = earn + reward;
  console.log(i + " " + reward + " " + earn);

  if(earn > 10000 && days === 0) {
    days = i;  /* How to break out of the if, but continue the outsode forloop??? */
  }
}
console.log("The total reward for 30 days is", earn);
console.log("It would take", days, "days to reach $10,000");

reward = 0.01;
days = 1;
while(reward <= 1000000000) {
  reward = reward * 2;
  days++;
}
console.log("It would take", days, "days to reach 1Billion");
