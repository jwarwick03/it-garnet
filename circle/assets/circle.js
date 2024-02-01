$( "#CircleForm" ).validate({

});

function display() {
    if ($("#CircleForm").valid()) {

      document.getElementById("diameter").innerHTML = "";
      document.getElementById("circumference").innerHTML = "";
      document.getElementById("area").innerHTML = "";
         
         var radius;
         var diameter;
         var circumference;
         var area;

         radius = document.getElementById("radius").value;
         radius = parseFloat( radius ); 

         diameter = calcDiameter(radius);
         circumference = calcCircumference(radius);
         area = calcArea(radius);

         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("circumference").innerHTML = circumference.toString();
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (radius) {
    return 2 * radius;
  }
  function calcCircumference (radius) {
    return 2 * Math.PI * radius;
  }
  function calcArea (radius) {
    return Math.PI * radius * radius;
  }


  function clearForm() {
    document.getElementById("radius").value = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}

