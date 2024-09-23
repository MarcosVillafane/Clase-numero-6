// Funcion que genera una contraseña aleatoria de longitud dada
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Genera una contraseña de longitud dada y la imprime en consola
const passwordLength = 12; // Puedes cambiar la longitud de la contraseña aquí
const newPassword = generatePassword(passwordLength);
console.log("Generated Password: " + newPassword);

// Calculadora con las 4 operaciones básicas
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Ejemplos de uso de la calculadora
const num1 = 10;
const num2 = 5;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));

// Funcion que devuelve el factorial de un número
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Ejemplo de uso de la función factorial
const number = 5;
console.log("Factorial of " + number + " is: " + factorial(number));