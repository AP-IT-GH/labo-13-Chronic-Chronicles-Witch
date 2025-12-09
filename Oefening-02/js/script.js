`use strict`

const year = parseInt(prompt("Van welk jaar wil u weten of het een schrikkeljaar is?"), 10);

let isLeapYear = false;
if( (year%4===0 && year%100 !== 0) || year%400 === 0){
    isLeapYear =true;
}

let resultMessage = isLeapYear ? ` ${year} is een schrikkeljaar` : `${year} is geen schrikkeljaar`;
console.log(resultMessage);