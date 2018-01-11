var getType = function(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC) {
    return "Not a triangle";
  }
  if (sideA + sideC <= sideB) {
    return "Not a triangle";
  }
  if (sideB + sideC <= sideA) {
    console.log("here");
    return "Not a triangle";
  }

  var score = 0;
  if (sideA === sideB) {
    score += 1;
  }
  if (sideA === sideC) {
    score += 1;
  }
  if (sideB === sideC) {
    score += 1;
  }

  if(score >= 2) {
    return ("Equilateral");
  }
  if(score === 1) {
    return ("Isoscolese");
  }

  return "Scalene";
}


$(document).ready(function() {

  $(".form1").submit(function(event) {
    var sideA = parseInt($("#side1").val());
    var sideB = parseInt($("#side2").val());
    var sideC = parseInt($("#side3").val());

    $("#output").text("");
    $("#output").text(getType(sideA, sideB, sideC));

    event.preventDefault();
  });

});
