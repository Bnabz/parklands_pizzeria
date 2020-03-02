class Pizza = function(type, size, crust, toppings, number, delivery){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.number = number;
  }

  sizePrice = function(){
    if (this.size === "regular") {
      return 500;
    } else if (this.size === "medium"){
      return 800;
    } else if (this.size === "large") {
      return 1000;
    }
  }





$(document).ready(function() {
 function getSizeCost() {
     var selectedSize = document.getElementById("size").value;
     return parseInt(selectedSize);
 }

 function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
$("#checkout").click(function() {

  let Pizza.type = $("#type option:selected").val();
  let Pizza.size = $("#size option:selected").val();
  let Pizza.crust = $("#crust option:selected").val();
  let Pizza.topping = $("#toppings option:selected").val();
  let Pizza.number = parseInt($("#number").val());










});







































});
