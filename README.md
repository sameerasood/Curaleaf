#### Problem

The company needs to verify the age of customer.
Customers send pictures with machine readable code - "JONES<P<<<11<11<2022"

Write a function MRC that take a string and returns the check digit.

**stage 1:**

- convert every character in the string to numeric value.
- 0-9 mapped to 0-9 - A-Z 10-36
- < > 0

**stage2:**
Sum of the characters times the weighting factors
weight - J x 7
weight - 0 x 3
weight - E x 1

**stage 3:**
Divide the sum by 10 and remainder is the check digit.
--
input: string
output - number

Example String: "JONES<P<<<11<11<2022"

![Console log statements](checkdigit.png)
