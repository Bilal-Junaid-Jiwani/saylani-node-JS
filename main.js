// Import arithmetic functions from operations.js using destructuring
const { add, subtract, multiply, divide } = require('./calculate');// It directs the operations automatically the index.js file

// Import the readline module to handle user input from the command line
const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to run the interactive calculator
function main() {
    // Prompt the user for the first number
    rl.question('Enter the first number: ', (num1) => {
        // Prompt the user for the second number
        rl.question('Enter the second number: ', (num2) => {
            // Prompt the user for the operation to perform
            rl.question('Enter the operation (+, -, *, /): ', (operator) => {
                // Convert input strings to floating-point numbers
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;

                // Determine which operation to perform based on user input
                switch (operator) {
                    case '+':
                        result = add(a, b); // Call add function
                        break;
                    case '-':
                        result = subtract(a, b); // Call subtract function
                        break;
                    case '*':
                        result = multiply(a, b); // Call multiply function
                        break;
                    case '/':
                        result = divide(a, b); // Call divide function
                        break;
                    default:
                        // Handle invalid operator input
                        console.log('Invalid operator');
                        rl.close();
                        return;
                }

                // Display the result to the user
                console.log(`The result is: ${result}`);
                rl.close(); // Close the readline interface
            });
        });
    });
}

// Start the calculator
main();