//Business logic
class Pizza = function(type, size, crust, toppings, number, delivery){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.number = number;
  }

Pizza.prototype.sizePrice = function(){
    if (this.size === "regular") {
      return 500;
    } else if (this.size === "medium"){
      return 800;
    } else if (this.size === "large") {
      return 1000;
    }
  }

Pizza.prototype.crustPrice = function(){
    if (this.crust === "thin") {
      return 100;
    } else if (this.crust === "stuffed"){
      return 150;
    } else if (this.crust === "gluten-free") {
      return 180;
    }
  }

Pizza.prototype.toppingsPrice = function(){
    if (this.toppings === "cheese") {
      return 100;
    } else if (this.toppings === "pineapple"){
      return 100;
    } else if (this.toppings === "mushroom") {
      return 80;
    }else if (this.toppings === "onion") {
      return 80;
    }
    else if (this.toppings === "bacon") {
      return 150;
    }
  }

Pizza.prototype.totalPrice = function(size,crust,toppings,number){
    return(size+crust+toppings)*number;
  }





//User interface logic
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
