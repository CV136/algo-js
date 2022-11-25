let i = 1
while (i < 100) { if (i%2 === 0) {
    console.log(i);
}
    i += 1;
  }
/*only 50 results displayed, mais a priori il a dû s'exécuter 100 fois ?*/

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }