import chalk from "chalk";
import logSymbols from "log-symbols";

console.log("Hello my package");

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgGray.italic('Hello world!'));

console.log(chalk.blue.bgGreen.italic("Ola, eu sou"));
console.log(chalk.green.bgCyan("Jarvis"));

console.log(logSymbols.success, chalk.green.italic("servidor iniciado"));

console.log(logSymbols.error, chalk.red.italic("servidor com problema"));

//line above the prompt
//prompt $P$_$G

// restoure 'node_modules'
// npm i

// install dependency (xxxx package) 
// npm i xxxx

// install dependency (xxxx package) as dev
// npm i xxxx -D

// unistall decendency (xxxx package) 
// npm uninstall xxxx

// all downloads dependencies
// npm fund

// update xxxx depency
// npm update xxxx


