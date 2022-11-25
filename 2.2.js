
let min = Number(window.prompt("Minimum number"))
let max = Number(window.prompt("Maximum number"))
let current = Number(window.prompt("Current number (?)"))

if ((min < current) && (current < max)) {
  console.log(current);
} else if (min > max) { 
  alert("Unfortunately, it appears that you don't understand anything. Have a nice day regardless.");
    window.close();
}
