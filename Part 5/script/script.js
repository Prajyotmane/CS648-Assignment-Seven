/* Step 1 */
function clickHandler() {
    "use strict";
    window.alert("I have been clicked");

}

/* Step 2 */
var button2 = window.document.getElementById("button2");
button2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};


/* Step 3 */
var myButtonThree = window.document.getElementById("button3")
myButtonThree.addEventListener("click", customOnClick);

function customOnClick() {
    window.alert("I have been clicked.")
}

/* Step 4 */
var myButtonFour = window.document.getElementById("button4")
myButtonFour.addEventListener("click", function() {
    window.alert("I have been clicked.")
});


/* Step 5 */
function init() {
    "use strict";
    var myButtonFive = window.document.getElementById("button5")
    myButtonFive.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
}

window.addEventListener("load", init);