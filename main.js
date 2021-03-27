// break & continue

for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i === 5 || i ===3) {
        continue; //weaker for of break, breaks and carry on another loop
    }

    if (i === 7) {
        break; //ends loop
    }
}

console.log('I have broken out of the loop');