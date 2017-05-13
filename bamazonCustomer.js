// Setting required dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("console.table");

//  Linking to database connection
var config = require('./config.js');
var dbConnection = mysql.createConnection(config);

// Connecting to database, printing products table
dbConnection.connect(function(err) {
     if (err) throw err;
     console.log("connected as id " + dbConnection.threadId);
     productsTable();
});

// Setting up products table for display
function productsTable() {
	dbConnection.query("SELECT * FROM products", function(err, res){
		console.table(res);
		customerPrompt(res);
	});
}

// User prompts asking which product they want to buy
function customerPrompt(res) {
	inquirer.prompt([{
		type: "input",
		name: "selection",
		message: "What is the id of the product you wnat to buy?"
	}])
}