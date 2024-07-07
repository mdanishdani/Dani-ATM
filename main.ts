#! /usr/bin/env node

import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; //Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
  [
      {
        name: "pin",
        message: "enter you pin",
        type: "number"
      }
  ]
)

 //12345 ==== 1234 - false
if (pinAnswer.pin === myPin) {
   console.log("Correct pin code!!!");
}

let operationAnswer = await inquirer.prompt(
  [
    {
      name:"operation",
      message: "please select option",
      type: "list",
      choices:["withdraw", "check balance", "fastCash"]
    }
  ]
)

console.log(operationAnswer);

 if (operationAnswer.operation === "withdraw") {
   let amountAns = await inquirer.prompt(
     [
      {
        name :"amount",
        message : "enter your amount",
        type : "number" 
      }
     ]
   )
  }else if (operationAnswer.operation === "fastCash") {
   let amountAns = await inquirer.prompt(
     [
      {
        name :"amount",
        message : "enter your amount",
        type : "list",
        choices : ['1000' , '2000' , '3000' , '5000' , '10000']
      }
     ]
   )

   // =, -=, +=
   myBalance -= amountAns.amount;
   
   console.log("Your remaining balance is: " + myBalance)
  }else if (operationAnswer.operation === "check balance"){
  console.log("yourbalnce is: " + myBalance)
}

else{ 
  console.log("Incorrect pin code")
}
