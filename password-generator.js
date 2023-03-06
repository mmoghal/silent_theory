// Define the available character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

// Define the function to generate a password
function generatePassword() {
  // Prompt the user for the password length
  const length = prompt("How many characters would you like your password to be? (8-128)");

  // If the user clicked Cancel, return from the function
  if (length === null) {
    return;
  }

  // Parse the length input as a number
  const lengthNum = parseInt(length, 10);

  // If the input is not a number or is outside the range of 8-128, display an error message and prompt again
  if (isNaN(lengthNum) || lengthNum < 8 || lengthNum > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  // Ask the user which character types to include in the password
  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  // If no character types were selected, display an error message and prompt again
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  // Build a string of all available characters based on the user's selection
  let availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  // Generate a password of the specified length using the available characters
  let password = "";
  for (let i = 0; i < lengthNum; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }

  // Return the generated password
  return password;
}

// Get references to the HTML elements
const generateButton = document.getElementById("generate");
const passwordTextarea = document.getElementById("password");

// Add a click event listener to the generate button
generateButton.addEventListener("click", () => {
  // Generate a password and display it in the textarea
  const password = generatePassword();
  if (password) {
    passwordTextarea.value = password;
  }
});
