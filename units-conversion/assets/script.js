function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var fromvalue = document.getElementById("fromvalue").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var operator;
        if (document.getElementById("fromcentimeters").checked) {
            operator = document.getElementById("fromcentimeters").value;
        }
        if (document.getElementById("frommeters").checked) {
            operator = document.getElementById("frommeters").value;
        }
        if (document.getElementById("fromkilometers").checked) {
            operator = document.getElementById("fromkilometers").value;
        }
        if (document.getElementById("frominches").checked) {
            operator = document.getElementById("frominches").value;
        }
        if (document.getElementById("fromfeet").checked) {
            operator = document.getElementById("fromfeet").value;
        }
        if (document.getElementById("fromyards").checked) {
            operator = document.getElementById("fromyards").value;
        }
        if (document.getElementById("frommiles").checked) {
            operator = document.getElementById("frommiles").value;
        }

        
        // Operand 2
        var operand2 = document.getElementById("Operand2").value;

        CalculateResult(operand1, operator, operand2);
    }
}

async function CalculateResult(operand1, operator, operand2) {
        
        // URL and method used with AJAX Call
        var myURL = "http://brucebauer.info/assets/ITEC3650/gethint.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?Operand1=" + encodeURIComponent(operand1) + "&Operator=" + encodeURIComponent(operator) + "&Operand2=" + encodeURIComponent(operand2);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});