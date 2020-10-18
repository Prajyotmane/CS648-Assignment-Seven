/*eslint-env browser*/

function show(inventory) {
    "use strict";
    window.console.log("");
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    
}

function update(inventory) {
    "use strict";
    var skuID = parseInt(window.prompt("Enter the sku number"), 10);
    var qUpdated = false;
    var updated = false;
    inventory.forEach(function (product) {
        if (product[0] === skuID) {
            updated = true;
            while(!qUpdated) {
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated")
                    qUpdated = true;
                } else {
                    window.console.log("Wrong input for quantity. Try again");
                }
            }
        }  
    });

    if (updated==false){
        window.console.log("Product not found"); 
    } 
}

function main() {
    "use strict";
    var inventory = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]];
    var cont = true;
    window.console.log("The Product Inventory Management System Command Menu");
    window.console.log("show - show all products ordered by sku number");
    window.console.log("update - Update the quantity of existing product");
    window.console.log("exit - Exit");
    while(cont==true){
        var command = window.prompt("Enter command");
        if(command == 'show'){
            show(inventory);
        }else if(command == "update"){
            update(inventory);
        }else if(command == "exit"){
            cont = false;
        }else{
            window.alert("Please enter a valid command");
        }
}
}

main();
