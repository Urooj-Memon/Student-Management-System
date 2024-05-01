#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(1000 + Math.random() * 90000);
console.log("\n\tWELCOME TO MY STUDENT MANAGEMENT SYSTEM!\t\n");
let answer = await inquirer.prompt([
    {
        name: "student",
        message: "Enter your Name:",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter Your Name!";
        },
    },
    {
        name: "courses",
        message: "Select the course to enrolled",
        type: "list",
        choices: ["Artificial Intelligence", "Web-Development", "English Language", "Cooking", "Graphic Design"]
    },
]);
const tutionfee = {
    "Artificial Intelligence": 20000,
    "Web-Development": 30000,
    "English Language": 5000,
    "Cooking": 3000,
    "Graphic Design": 10000,
};
console.log(`\nTution Fees: ${tutionfee[answer.courses]}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method!",
        choices: ["Easypaisa", "Bank-transfar", "Nayapay"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a value!";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount) {
    console.log(`Congratulations,You have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            message: "What would you like to do next?",
            type: "list",
            choices: ["View Student Status", "Exit"],
        }
    ]);
    if (ans.select === "View Student Status") {
        console.log(`\nStudent Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition Fee Paid: ${paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System");
    }
}
else {
    console.log("Invalid Amount due to Course!\n");
}
