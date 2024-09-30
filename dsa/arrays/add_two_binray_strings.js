const INPUT = ["10", "1"];

function addTwoBinaryStrings(s1 = "", s2 = "") {
  const s1Length = s1.length - 1;
  const s2Length = s2.length - 1;

  const max = Math.max(s1Length, s2Length);

  let current = 0;
  s1 = s1.split("").reverse();
  s2 = s2.split("").reverse();
  const s3 = [];
  let carry = 0;
  let sum = 0;
  while (current <= max) {
    if (current == 0) {
      sum = parseInt(s1[current]) + parseInt(s2[current]);
    } else {
      sum =
        parseInt(s1[current] == undefined ? 0 : s1[current]) +
        parseInt(s2[current] == undefined ? 0 : s2[current]) +
        carry;
    }

    carry = Math.floor(sum / 2);
    s3[current] = sum % 2;
    current++;
  }
  s3.push(carry);
  console.log(s3.reverse().join("").slice(1));
}

addTwoBinaryStrings(INPUT[0], INPUT[1]);
