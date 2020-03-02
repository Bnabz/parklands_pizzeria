class Pizza{
  constructor(type, size, crust, toppings, number, delivery){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.number = number;

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

  let type = $("#type option:selected").val();
  let size = $("#size option:selected").val();
  let crust = $("#crust option:selected").val();
  let topping = $("#toppings option:selected").val();
  let number = parseInt($("#number").val());










});







































});
