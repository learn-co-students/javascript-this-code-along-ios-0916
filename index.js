const app = "I don't do much."


function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}


function serve(customer) {
  if(arguments.length > 0) {
       var customers = Array.prototype.slice.call(arguments);
       last = customers.pop();
       console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
   }else {
       console.log(this.name + ". Order up!");
   }
}

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

var blt = new Sandwich("white", ["bacon", "lettus"], "rectangle");
var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
pbj.describe();
var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

//pbj.describe.call(salad);

pbj.describe();
blt.name = "BLT";
serve.call(blt, "Terry");
deliverFood.call(blt, "Terry", "4");

salad.describe = pbj.describe.bind(salad);
salad.describe();
//blt.serve();
