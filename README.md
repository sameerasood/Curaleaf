#### Problem

users need to verify who they are - their age.
send pictures with machine readable code - "JONES<P<<<11<11<2022"

function MRC as a string and returns the check digit as a number.

stage 1:

- convert every character in the string to numeric value.
- 0-9 mapped to 0-9
- A-Z 10-36
  < > 0

stage2:
Sum of the characters times the weighting factors
weight - J x 7
weight - 0 x 3
weight - E x 1

stage 3:
divide the sum by 10 and remainder is the check digit.

--
input: string
output - number

example string: "JONES<P<<<11<11<2022"
