/* This will print the date in line 3 and format it to the desired format in line 7 and print in line 8*/
var fullDate = new Date()
console.log(fullDate);

var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);

var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate);
/* Console.log statements has been left on purpose for control, but would be removed if it was a "real" product*/

document.getElementById("dateJS").innerHTML = currentDate;
/* This will push the currentDate into second.html in the element dateJS with formatting <h4> */
/* This will alert the user when clicking on "give me more GaGa" */
$(function () {
    $("#btnMess").click(function () {
        alert("POKER FACE");
    });
});

/*
-Capture email input field second.html
-Make login drop down a login form
-change img source for ads
 */