async function getResults() {
    "use strict";
  
    var form = $("#myform");
    
    form.validate();
    
    if (form.valid()) {
        
        var baseCurrency = document.getElementById("baseCurrency").value;
        var toCurrency = document.getElementById("toCurrency").value;
        var apiKey = "XEWlJHZok6skAUqed_1nAZu57I2KBZHn";
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + baseCurrency + toCurrency + "/range/1/day/" + FromDate + "/" + ToDate + apiKey;
        //https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2023-01-09/2023-01-09?apiKey=XEWlJHZok6skAUqed_1nAZu57I2KBZHn
        
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
               let currencyDate = [];
               let currencyValue = [];
               let numdays = msg1.results.length;
               if (numdays > 0) {
                 for (let i = 0; i < numdays; i++) {
                   /* currency close value */
                   currencyValue[i] = msg1.results[i].c;
                   /* date is in Unix milleseconds - create a temporary date letiable */
                   let tempdate = new Date(msg1.results[i].t);
                   /* extract the date string from the value */
                   currencyDate[i] = tempdate.toLocaleDateString();
                }
            }
        }
 
        let ctx0 = document.getElementById("chartjs-0");
        var myChart = new Chart(ctx0, {
          type: "line",
          data: {
            labels: currencyDate,
            datasets: [
              {
                label: "1 " + baseCurrency + " to " + toCurrency,
                data: currencyValue,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                lineTension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: baseCurrency + " to " + toCurrency,
            },
          },
        });
      } else {
        /* AJAX completed with error - probably invalid stock ticker symbol */
        alert("Currency Not Found - Status: " + msg1Object.status);
        return;
      }
    }
  
  function clearForm() {
    document.getElementById("baseCurrency").value = "";
    document.getElementById("toCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
  
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext("2d");
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
  }