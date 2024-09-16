// src/scripts/logASCIIArt.js
import figlet from 'figlet';

function logASCIIArt() {
  console.log(figlet.textSync('This.GUI', {
    font: 'Big', // Choose a style like 'Big', 'Standard', etc.
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }));
}

logASCIIArt(); // This calls the function when the script is executed