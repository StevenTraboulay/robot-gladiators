//Game States
//"Win" - player robot has defaeted all enemy robots
//        * Fight all enemy robots
//        * Defeat each enemy robots
// "Lose" - player robots health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//defined the enemies name
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//console log for enemy names

console.log(enemyNames); //array argument

//for code testing
for (var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + i + " is at " + i + " index ");
}

//defined the enemies health
var enemyHealth = 50;
//defined the enemies attack strength
var enemyAttack = 12;

// Alert users that they are starting the round
window.alert("Welcome to Robot Gladiators!");

//once above functions have run, then the fight is executed  and this is creating the function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt(
      'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

//execute function
for (var i = 0; i < enemyNames.length; i++) {

  if(playerHealth > 0){
    window.alert ("welcome to Robot Gladiators! Round " + (i + 1));
  }
  
  // if you're out of health and you lose its over
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

  //pick new enemy to fight based on the index of enemy names array
  var pickedEnemyName = enemyNames[i];

  //reset enemyhealth before starting new fight
  enemyHealth = 50;

  //use debugger to pause script 
  //debugger
  
  //call fight funcion with enemy robot
  fight(pickedEnemyName);


}
