var link = document.querySelector(".hotel-search");
var popup = document.querySelector(".modal-content");

var adults = document.getElementById("adults").value;
var deductAdult = document.querySelector(".less-adults");
var addAdult = document.querySelector(".more-adults");

var children = document.getElementById("children").value;
var deductChild = document.querySelector(".less-children");
var addChild = document.querySelector(".more-children");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-content-show");
});

deductAdult.addEventListener("click", function(deduction) {

    if ( adults > 0) {
        adults = adults - 1;
        document.getElementById("adults").value = adults;
    }
});

addAdult.addEventListener("click", function(addition) {
    adults = +adults + +1;
    document.getElementById("adults").value = adults;
});

deductChild.addEventListener("click", function(deduction) {

    if ( children > 0) {
        children = children - 1;
        document.getElementById("children").value = children;
    }
});

addChild.addEventListener("click", function(addition) {
    children = +children + +1;
    document.getElementById("children").value = children;
});