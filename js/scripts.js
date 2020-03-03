//Business logic
var cost;
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
    if (Number.isInteger(newNumber)===false){newNumber=0};
    let meal = new Pizza (newType, newSize, newCrust, newToppings, newNumber,)

    cost = meal.totalPrice();
    $("#summary").fadeIn(3000);
    $(".deliver").fadeIn();
    $(".pick_up").fadeIn();
    $(".summary_type").text("Type" + ":" + " " + newType);
    $(".summary_size").text("Size" + ":" + " " + newSize);
    $(".summary_toppings").text("Toppings" + ":" + " " + newToppings);
    $(".summary_number").text("Quantity" + ":" + " " + newNumber);
    $(".summary_cost").text("Cost" + ":" + " " + cost);

  });


  $(".deliver").click(function() {
     event.preventDefault();
     $("#summary").fadeOut();
     $("#delivery-form").fadeIn(3000);
  });

  $(".pick_up").click(function() {
     event.preventDefault();
     $("#summary").fadeOut();
     $("#pickup-summary").fadeIn(3000);
  });

  $("#delivery-form").submit(function(event){
   event.preventDefault();
   let name = $("#name").val();
   let estate = $("#estate").val();
   let address = $("#address").val();
   let newCost= cost+200
    $("#summary-text").text("Thank"+" "+"you"+","+" "+name+"."+ " "+"your"+" "+"order"+" "+"shall"+" "+"be"+" "+"delivered"+" "+"to"+" "+address+","+" "+estate+"."+" "+"Delivery"+" "+"charge"+" "+"is"+"Ksh.200"+","+" "+"bringing"+ " "+"the"+" "+"total"+" "+"cost"+" "+"to"+" "+"Ksh."+newCost+".");
     $("#delivery-form").fadeOut();
    $("#delivery-summary").fadeIn(3000);
  });

});
