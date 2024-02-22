function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var Oprand1 = document.getElementById("Oprand1").value;

        // From Value Radio Buttons
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var FromUnit;
        if (document.getElementById("fromcm").checked) {
            FromUnit = document.getElementById("fromcm").value;
        }
        if (document.getElementById("fromm").checked) {
            FromUnit = document.getElementById("fromm").value;
        }
        if (document.getElementById("fromkm").checked) {
            FromUnit = document.getElementById("fromkm").value;
        }
        if (document.getElementById("fromin").checked) {
            FromUnit = document.getElementById("fromin").value;
        }
        if (document.getElementById("fromft").checked) {
            FromUnit = document.getElementById("fromft").value;
        }
        if (document.getElementById("fromyd").checked) {
            FromUnit = document.getElementById("fromyd").value;
        }
        if (document.getElementById("frommi").checked) {
            FromUnit = document.getElementById("frommi").value;
        }

        // To Value Radio Buttons
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("tocm").value;
        }
        if (document.getElementById("tom").checked) {
            ToUnit = document.getElementById("tom").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("tokm").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("toin").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("toft").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("toyd").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("tomi").value;
        }

        

        CalculateResult(Oprand1, FromUnit, ToUnit);
    }
}

async function CalculateResult(Oprand1, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(Oprand1) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Oprand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";

    document.getElementById("fromcm").checked = false;
    document.getElementById("fromm").checked = false;
    document.getElementById("fromkm").checked = false;
    document.getElementById("fromin").checked = false;
    document.getElementById("fromft").checked = false;
    document.getElementById("fromyd").checked = false;
    document.getElementById("frommi").checked = false;

    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;

    document.getElementById("fromMsg").innerHTML = "";
    document.getElementById("toMsg").innerHTML = "";

    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});