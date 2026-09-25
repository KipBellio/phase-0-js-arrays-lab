// Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];
//Function to log first product
function logFirstProduct(arr){
  console.log(arr[0]);
}
logFirstProduct(products);
//Function to add product
function addProduct(newProduct){
  products.push(newProduct);
}
addProduct("Tablet");
console.log(products);

//Function to update product name
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid index position");

  }
}
updateProductName(1, "Computer");
console.log(products);

//Function to delete a product
function removeLastProduct(){
  products.pop();
}
removeLastProduct();
console.log(products);






// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
