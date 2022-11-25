for (let i = 1; i <= 100; i += 1) { if (i%2 == 0) {
  console.log(i, i/2)
} else console.log(i, i*3)
}

//or

let i = 1
while (i <= 100) { if
  (i%2 == 0) {
    console.log(i, i/2)
  } else console.log(i, i*3);
  i += 1;
  if (i === 101) {
    break;
  }
} 