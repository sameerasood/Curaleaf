class CheckDigit {
  constructor(str) {
    this.str = str;
    this.sum = 0
  }

  result() {
    for(let i=0; i<this.str.length < i++){
        if (i%3 === 0){
            w = 7;
            elsif(i%3 == 1){
                w = 3
            }
            elseif(i%3 == 2)
            w = 1
        }
        if (this.str[i].in(A..Z) ){
           this.sum += this.str.charcode[i] - 55 * w
        }

        elsif(this.str[i].in(0-9)){
            this.sum += this.str.charcode[i] * w
        }
        else 
        {        this.sum += 0
}    }
checkDigit = this.sum % 10
  }
}

module.exports = CheckDigit;
