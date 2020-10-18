/* Step 1 */
function halfNumber(num) {
    "use strict";
    if (!isNaN(num)) {
        var res = num / 2;
        return res;
    }
}
var hnum = 19;
window.console.log("Half of " + hnum + " is " + halfNumber(hnum) + ".");


/* Step 2 */
function squareNumber(num) {
    "use strict";
    if (!isNaN(num)) {
        return num * num;
    }
}
var snum = 10;
window.console.log("The result of squaring the number " + snum + " is " + squareNumber(snum) + ".");


/* Step 3 */
function percentOf(firstNum, secondNum) {
    "use strict";
    if (!(isNaN(firstNum) && isNaN(secondNum))) {
        return (firstNum / secondNum) * 100;
    }

}
var firstNum =10;
var secondNum = 20;
window.console.log(firstNum + " is " + percentOf(firstNum, secondNum) + "% of " + secondNum + ".");

/* Step 4 */
function findModulus(firstNum, secondNum) {
    "use strict";
    if (!(isNaN(firstNum) && isNaN(secondNum))) {
        return (firstNum % secondNum);
    }
}

var mNum1 = 6;
var mNum2 = 4;
window.console.log(findModulus(mNum1, mNum2) + " is the modulus of " + mNum1 + " and " + mNum2 + ".");

/* Step 5 */
function addNumbers(arr) {
    "use strict";
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += Number(arr[i]);
        }
    }
    window.console.log("The sum is "+ sum);
}

var arr = window.prompt("Enter numbers seprated by commas").trim().split(",");
addNumbers(arr);