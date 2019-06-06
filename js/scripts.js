$(document).ready(function() {
  $("#triangleForm").submit(function(event) {
    var s1 = parseInt($("input#side1").val());
    var s2 = parseInt($("input#side2").val());
    var s3 = parseInt($("input#side3").val());

    console.log("side 1 is " + s1);
    console.log("side 2 is " + s2);
    console.log("side 3 is " + s3);

    if (s1 === s2 && s2 === s3 && s3 === s1) {
      $("#equilateral").show();
    } else if (s1 === s2 || s3 === s2 || s1 === s3) {
      $("#isosceles").show();
    } else if (s1 !== s2 && s3 !== s2 && s1 !== s3) {
      $("#scalene").show();
    } else if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
      $("#not").toggle();
    }
    event.preventDefault();
  });
});
