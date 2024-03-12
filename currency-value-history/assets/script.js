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

      var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + baseCurrency + toCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?apiKey=" + apiKey;

      try {
          /* Make the AJAX call */
          var msg1Object = await fetch(myURL1);

          if (!msg1Object.ok) {
              throw new Error("Request failed with status: " + msg1Object.status);
          }

          var msg1JSONText = await msg1Object.text();
          var msg1 = JSON.parse(msg1JSONText);

          let currencyDate = [];
          let currencyValue = [];
          let numdays = msg1.results.length;
          if (numdays > 0) {
              for (let i = 0; i < numdays; i++) {
                  currencyValue[i] = msg1.results[i].c;
                  let tempdate = new Date(msg1.results[i].t);
                  currencyDate[i] = tempdate.toLocaleDateString();
              }
          }

          let ctx0 = document.getElementById("chartjs-0");
          var myChart = new Chart(ctx0, {
              type: "line",
              data: {
                  labels: currencyDate,
                  datasets: [{
                      label: "1 " + baseCurrency + " to " + toCurrency,
                      data: currencyValue,
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      lineTension: 0.1,
                  }, ],
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
      } catch (error) {
          console.error("Error fetching data:", error);
          alert("Error fetching data. See console for details.");
      }
  }
}

function clearForm() {
  document.getElementById("baseCurrency").value = "";
  document.getElementById("toCurrency").value = "";
  document.getElementById("FromDate").value = "";
  document.getElementById("ToDate").value = "";

  var canvas0 = document.getElementById("chartjs-0");
  var context0 = canvas0.getContext("2d");
  context0.clearRect(0, 0, canvas0.width, canvas0.height);
}
