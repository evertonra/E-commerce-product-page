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

function addCart() {
  var product = document.getElementById("product").innerText;
  var quantity = parseInt(document.getElementById("quantity").innerText);
  var price = parseInt(document.getElementById("price").innerText);
  var total = quantity * price;

  var cart = { product, quantity, price, total };
  console.log("total", cart);
  localStorage.setItem("cartList", JSON.stringify(cart));
}

function removeCart() {
  localStorage.removeItem("cartList");
}

function formatPrice(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function openCartModal() {
  const modal = document.getElementById("cartModal");

  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
  console.log("modal", modal);
}
