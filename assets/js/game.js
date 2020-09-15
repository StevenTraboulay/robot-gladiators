//Game States
//"Win" - player robot has defaeted all enemy robots
//        * Fight all enemy robo
//        * Defeat each enemy robot
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
console.log( enemyNames);

//for code testing
for(var i = 0; i < enemyNames.length; i++){
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + i + " is at " + i + " index ");
  
}

//defined the enemies health
var enemyHealth = 50;
//defined the enemies attack strength
var enemyAttack = 12;

//once above functions have run, then the fight is executed  and this is creating the function
var fight = function() {

    // Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //prompting the fight with a choice option 
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  //logs the promptfight choice
  console.log (promptFight);

  if (promptFight === "fight" || promptFight === "FIGHT"){

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth +" health remaining "
);
// check enemy's health
if (enemyHealth <=0) {
  window.alert(enemyNames + " has died!");
}

else {
  window.alert(enemyNames + " still has " + enemyHealth + " health left.")
}

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(
  enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
);

//check player's health
if (playerHealth <= 0){
  window.alert (playerName + " has died!");
}
else {
  window.alert (playerName + " still has " + playerHealth + " health left. ");
}

  } //This bracket closes the FIGHT/fight option, allowing the next else if to take place
// if player choses to skip
else if (promptFight === "skip" || promptFight === "SKIP"){
  window.alert(playerName + " has chosen to skip the fight! ");
//confirm their skip option
var confirmSkip = window.confirm( " Are you sure you'd like to quit? ");

//if yes (true) leave fight
if (confirmSkip){
  window.alert(playerName + " has decided to skip this fight.  Goodbye!");
  //subtract money from player Money for skipping
  playerMoney = playerMoney -2;
}
//if no (false), ask question again by tunning fight() again
else {
  fight();
}

}
else{
  window.alert(" you need to pick a valid option.  Try again! ");
}

};

//execute function
//fight();

