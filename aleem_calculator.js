import inquirer from "inquirer";
let question = [
    {
        name: "operator",
        type: "list",
        choices: ["+", "-", "/", "*"]
    },
    {
        name: "first",
        type: "number",
        message: "enter first number"
    },
    {
        name: "second",
        type: "number",
        message: "enter second number"
    }
];
let result = await inquirer.prompt(question);
switch (result.operator) {
    case "+":
        console.log(result.first + result.second);
        break;
    case "-":
        console.log(result.first - result.second);
        break;
    case "*":
        console.log(result.first * result.second);
        break;
    case "/":
        console.log(result.first / result.second);
        break;
    default:
        console.log("wrong operator");
        break;
}
