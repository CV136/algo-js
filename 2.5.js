for (let favorite = prompt("What's your favorite number?"); favorite !== "42";) {
    favorite = prompt("Are you sure?");
}

//or

let favorite = prompt("What's your favorite number?");
while (favorite !== "42") {
    favorite = prompt("Are you sure?");
}