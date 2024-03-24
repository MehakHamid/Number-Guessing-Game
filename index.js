#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessNumber",
        type: "number",
        message: "Please Enter a Number between 1-6." }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(`Congratulation! You Guess the Right Number`);
}
else {
    console.log(`Opss.. You Guess the Wrong Number, Try Again.`);
}
