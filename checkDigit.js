class CheckDigit {
  constructor(str) {
    this.str = str;
    this.sum = 0;
  }

  result() {
    let weight = w;
    for (let i = 0; i < this.str.length; i++) {
      if (i % 3 === 0) {
        w = 7;
      } else if (i % 3 === 1) {
        w = 3;
      } else if (i % 3 == 2) w = 1;
    }
    if (this.str[i].match(/[A-Z]/)) {
      this.sum += (this.str.charCodeAt[i] - 55) * w;
    } else if (this.str[i].match(/[0-9]/)) {
      this.sum += this.str.charCodeAt[i] * w;
    } else {
      sum += 0;
    }
    let checkDigit = sum % 10;
    return checkDigit;
  }
}

module.exports = CheckDigit;
