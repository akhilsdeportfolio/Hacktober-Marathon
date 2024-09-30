const INPUT = [9, 0, 9];

function addOneToArray(arr = []) {
  const reversedArray = arr.reverse();

  let carry = 0;
  for (let i = 0; i < reversedArray.length; i++) {
    if (i == 0) arr[i] = arr[i] + 1;
    else if (carry !== 0) arr[i] = arr[i] + carry;

    carry = parseInt(arr[i] / 10);

    if (carry !== 0) arr[i] = arr[i] % 10;
  }

  if (carry) arr.push(carry);
  console.log("After Adding", arr.reverse().join(""));
}

addOneToArray(INPUT);
