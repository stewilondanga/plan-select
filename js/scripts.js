var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

let basicPlan = document.querySelector(".basic");
let standardPlan = document.querySelector(".standard");
let premiumPlan = document.querySelector(".premium");
let column_one = document.querySelectorAll(".col1");
let column_two = document.querySelectorAll(".col2");
let column_three = document.querySelectorAll(".col3");

basicPlan.addEventListener("click", function() {
      basicPlan.classList.remove("addOpacity");
      standardPlan.classList.add("addOpacity");
      premiumPlan.classList.add("addOpacity");

      column_one.forEach(function(column) {
        column.classList.remove("inactive");
      });
      column_two.forEach(function(column) {
        column.classList.add("inactive");
      });

      /*  column_three.forEach(function(column) {
          column.classList.add("inactive");
        });
      });

      standardPlan.addEventListener("click", function() {
        basicPlan.classList.add("addOpacity");
        standardPlan.classList.remove("addOpacity");
        premiumPlan.classList.add("addOpacity");

        column_one.forEach(function(column) {
          column.classList.add("inactive");
        });
        column_two.forEach(function(column) {
          column.classList.remove("inactive");
        });

        column_three.forEach(function(column) {
          column.classList.add("inactive");
        });
      });

      premiumPlan.addEventListener("click", function() {
        basicPlan.classList.add("addOpacity");
        standardPlan.classList.add("addOpacity");
        premiumPlan.classList.remove("addOpacity");

        column_one.forEach(function(column) {
          column.classList.add("inactive");
        });
        column_two.forEach(function(column) {
          column.classList.add("inactive");
        });

        column_three.forEach(function(column) {
          column.classList.remove("inactive");
        });
      });

      basicPlan.click();
