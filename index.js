#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green(`
===============================================
Let's have a Number Guessing Game with Zain ALi
===============================================
`));
const randomNumber = Math.floor(Math.random() * 10) + 1; // Corrected random number generation
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "guess",
        message: "Guess a number between 1 and 10 =",
    },
]);
// Now conditional statement using if-else statement.
if (answer.guess === randomNumber) {
    console.log(chalk.blue(`
------------------------------------------
`));
    console.log(chalk.yellow("\nCongratulations! You guessed the right number"));
    console.log(chalk.blue(`
------------------------------------------
`));
}
else {
    console.log(chalk.blue(`
------------------------------------------
`));
    console.log(chalk.red("\nSorry! You guessed the wrong number"));
    console.log(chalk.blue(`
------------------------------------------
`));
}
