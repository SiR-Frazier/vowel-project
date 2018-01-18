var vowelArray = [];
var counterA = 0;
var counterB = 0;
var counterC = 0;
var counterD = 0;
var counterE = 0;
var counterF = 0;
var counterG = 0;
var counterH = 0;

$(document).ready(function() {
  $("form#vowel-counterA").submit(function(event) {
    event.preventDefault();
    var findVowelInputA = $("#vowel-multiWord").val();
    var vowelArrayA = findVowelInputA.split("");

      for (var i = 0; i <= vowelArrayA.length; i++) {
        if (vowelArrayA[i] === "a" || vowelArrayA[i] === "e" || vowelArrayA[i] === "i" || vowelArrayA[i] === "o" || vowelArrayA[i] === "u") {
          counterA += 1;
        }
      }
      $("#vowelNumberA").text(counterA);
      $("#resultA").show();
  });

  $("form#vowel-counterB").submit(function(event) {
    event.preventDefault();
    var findVowelInputB = $("#vowel-multiChar").val();

    var vowelArrayB = findVowelInputB.split("");

      for (var i = 0; i <= vowelArrayB.length; i++) {
        if (vowelArrayB[i] === "a") {
          counterB += 1;
        }
      }


      $("#vowelNumberB").text(counterB);
      $("#resultB").show();
  });

  $("form#vowel-counterC").submit(function(event) {
    event.preventDefault();

    var findVowelInputC = $("#singleVowel").val();
    var vowelArrayC = findVowelInputC.split("");

      for (var i = 0; i <= vowelArrayC.length; i++) {
        if (vowelArrayC[i] === "e") {
          counterC += 1;
        }
      }
      console.log(vowelArrayC);

      $("#vowelNumberC").text(counterC);
      $("#resultC").show();
  });

  $("form#vowel-counterD").submit(function(event) {
    event.preventDefault();

    var findVowelInputD = $("#noCaseVowel").val();

    var vowelArrayD = findVowelInputD.split("");

      for (var i = 0; i <= vowelArrayD.length; i++) {
        if (vowelArrayD[i] === "a" || vowelArrayD[i] === "e") {
          counterD += 1;
        }
      }

      $("#vowelNumberD").text(counterD);
      $("#resultD").show();
  });

  $("form#vowel-counterE").submit(function(event) {
    event.preventDefault();

    var findVowelInputE = $("#allVowels").val();

    var vowelArrayE = findVowelInputE.split("");

      for (var i = 0; i <= vowelArrayE.length; i++) {
        if (vowelArrayE[i] === "o" || vowelArrayE[i] === "O") {
          counterE += 1;
        }
      }


      $("#vowelNumberE").text(counterE);
      $("#resultE").show();
  });

  $("form#vowel-counterF").submit(function(event) {
    event.preventDefault();

    var findVowelInputF = $("#onlyLetter").val();

    var vowelArrayF = findVowelInputF.toLowerCase().split("");

      for (var i = 0; i <= vowelArrayF.length; i++) {
        if (vowelArrayF[i] === "a" || vowelArrayF[i] === "e" || vowelArrayF[i] === "i" || vowelArrayF[i] === "o" || vowelArrayF[i] === "u") {
          counterF += 1;
        }
      }


      $("#vowelNumberF").text(counterF);
      $("#resultF").show();
  });

  $("form#vowel-counterG").submit(function(event) {
    event.preventDefault();

    var findVowelInputG = $("#nonAlpha").val();

    var vowelArrayG = findVowelInputG.toLowerCase().split("");

      for (var i = 0; i <= vowelArrayG.length; i++) {
        if (vowelArrayG[i] === "a" || vowelArrayG[i] === "e" || vowelArrayG[i] === "i" || vowelArrayG[i] === "o" || vowelArrayG[i] === "u") {
          counterG += 1;
        }
      }


      $("#vowelNumberG").text(counterG);
      $("#resultG").show();
  });

  $("form#vowel-counterH").submit(function(event) {
    event.preventDefault();

    var findVowelInputH = $("#vowel-noCaps").val();

    var vowelArrayH = findVowelInputH.toLowerCase().split("");

      for (var i = 0; i <= vowelArrayH.length; i++) {
        if (vowelArrayH[i] === "a" || vowelArrayH[i] === "e" || vowelArrayH[i] === "i" || vowelArrayH[i] === "o" || vowelArrayH[i] === "u") {
          counterH += 1;
        }
      }


      $("#vowelNumberH").text(counterH);
      $("#resultH").show();
  });

});
