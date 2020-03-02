//Business logic
Pizza = function(type, size, crust, toppings, number, delivery){
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

Pizza.prototype.totalPrice = function(){
    return(this.toppingsPrice() + this.crustPrice() + this.sizePrice());

  }





//User interface logic
$(document).ready(function() {

$("#checkout").click(function() {
  event.preventDefault();
  let newType = $("#type option:selected").val();
  let newSize = $("#size option:selected").val();
  let newCrust = $("#crust option:selected").val();
  let newToppings = $("#toppings option:selected").val();
  let newNumber = parseInt($("#number").val());
  let meal = new Pizza (newType, newSize, newCrust, newToppings, newNumber,)

  let cost = meal.totalPrice();
  alert("You have ordered a"+" "+meal.size+" " +meal.type +" "+"pizza. Total cost is"+" "+cost+"."+" "+"Please choose between delivery and pickup");









});







































});
