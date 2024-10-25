function addQuantity() {
  var quantity = parseInt(document.getElementById("quantity").innerText);
  quantity++;
  console.log("quantity", quantity);
  document.getElementById("quantity").innerText = quantity;
}

function subQuantity() {
  var quantity = parseInt(document.getElementById("quantity").innerText);
  if (quantity > 1) {
    quantity--;
    console.log("quantity", quantity);
    document.getElementById("quantity").innerText = quantity;
  }
}
