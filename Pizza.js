//Pizza Toppings
let pepperoni = 1;
let sausage = 1;
let mushrooms = 1;
let blackOlives = 1;
let greenOlives = 1;

let subtotal = 0;
let tax = 0;
let total = 0;

let lastSizePrice = 0;
let currentPizzaSize;

let toppings = [];

window.onload = function() {//automatically loads large pizza
    sizeChange("Large");
  };

function reset1() {
    subtotal = 0;
    tax = 0;
    total = 0;
    lastSizePrice = 0;

    //reset array
    toppings = [];

    //Displaying Price
    out1.innerHTML = "Subtotal: $" + (subtotal.toFixed(2));//subtotal
    out2.innerHTML = "Tax: $" + (tax.toFixed(2));//tax
    out3.innerHTML = "Total: $" + (total.toFixed(2));//Total

    console.log(toppings);
}

function sizeChange(obj) {
    //Pizza Sizes
    let option = document.getElementsByName("Size");
    subtotal = subtotal - lastSizePrice;//resets size price, can only buy one size at a time

    if (obj == "Small") {//Small
            subtotal = subtotal + Number(option[0].value);
            lastSizePrice = Number(option[0].value);
            currentPizzaSize = "Small";
    }                       
    if (obj == "Medium") {// Medium
        subtotal = subtotal + Number(option[1].value);
        lastSizePrice = Number(option[1].value);
        currentPizzaSize = "Medium";
    }
    if (obj == "Large") {// large
        subtotal = subtotal + Number(option[2].value);
        lastSizePrice = Number(option[2].value);    
        currentPizzaSize = "Large";
    }
    calculateCart();
}

function toppingChange(obj) {// if a topping is clicked

    const index = toppings.indexOf(String(obj));
    if (index > -1) { // only splice array when item is found
        toppings.splice(index, 1); // 2nd parameter means remove one item only
        console.log("Removing: " + String(obj));
        subtotal = subtotal -= 1.5;//subtracting $1.00 from subtotal
        document.getElementById((obj.trim()).toLowerCase() + "one").style.opacity = 0;
        document.getElementById((obj.trim()).toLowerCase()).checked = true;
    } else {
        toppings[toppings.length] = String(obj);
        console.log("Adding: " + String(obj));
        subtotal = subtotal += 1.5;//adding $1.00 to the subtotal
        document.getElementById((obj.trim()).toLowerCase() + "one").style.opacity = 1;
        document.getElementById((obj.trim()).toLowerCase()).checked = false;
    }
    calculateCart();
}

function calculateCart() {

    //Calculating Price
    tax = subtotal * 0.13;
    total = subtotal + tax;

    //Displaying Price
    console.log(total);

    itemList.innerHTML = currentPizzaSize + " Pizza, with: " + toppings;

    out1.innerHTML = "Subtotal: $" + (subtotal.toFixed(2));//subtotal
    out2.innerHTML = "Tax: $" + (tax.toFixed(2));//tax
    out3.innerHTML = "Total: $" + (total.toFixed(2));//Total
}
  
