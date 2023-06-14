class CheckDigit {
  constructor(str) {
    this.str = str;
    this.sum = 0;
  }

  machineReadableCode() {
    let weight = 0;
    for (let i = 0; i < this.str.length; i++) {
      if (i % 3 === 0) {
        weight = 7;
      } else if (i % 3 === 1) {
        weight = 3;
      } else if (i % 3 == 2) {
        weight = 1;
      }

      if (this.str[i].match(/[A-Z]/)) {
        console.log(this.str.charCodeAt(i));
        this.sum += (this.str.charCodeAt(i) - 55) * weight;
      } else if (this.str[i].match(/[0-9]/)) {
        console.log(parseInt(this.str[i]));
        this.sum += parseInt(this.str[i]) * weight;
      } else {
        this.sum += 0;
      }
    }
    let finalDigit = this.sum % 10;
    return finalDigit;
  }
}

module.exports = CheckDigit;
const checkDigit = new CheckDigit("JONES<P<<<11<11<2022");
console.log("Check Digit is " + checkDigit.machineReadableCode());
