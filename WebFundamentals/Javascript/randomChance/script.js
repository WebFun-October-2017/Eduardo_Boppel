

function game(coins, goal) {
  while (coins > 0) {

    var chance = Math.random();   //test if won

    if (chance <= 0.01) {
      var prize = Math.trunc(Math.random()*50)+50;

      coins = coins + prize;
      console.log("Contratulations, you won " + prize + " coins! You now have " + coins)

      if(coins >= goal) {
        console.log(" You reached your goal of " +goal+ "! Goodbye!")
        break
      }
    }

    coins--
    console.log(" Sorry, try again. You now have " + coins + " coins")




  }

  console.log("You don't have any coins left")
}

// Enter amount of coins to start with
game(30, 200);
