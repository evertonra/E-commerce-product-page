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
  var img = document.getElementById("img").src;
  var quantity = parseInt(document.getElementById("quantity").innerText);
  var price = parseInt(document.getElementById("price").innerText);
  var total = quantity * price;

  var cart = { product, quantity, price, total, img };
  console.log("total", cart);
  localStorage.setItem("cartList", JSON.stringify(cart));
}

function removeCart() {
  localStorage.removeItem("cartList");
}

function formatPrice(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// function openCartModal() {
//   const modal = document.getElementById("cartModal");

//   // Alterna a visibilidade do modal adicionando ou removendo a classe 'hidden'
//   if (modal.classList.contains("hidden")) {
//     modal.classList.remove("hidden");
//   } else {
//     modal.classList.add("hidden");
//   }
// }

function openCartModal() {
  const modal = document.getElementById("cartModal");
  const cartContent = JSON.parse(localStorage.getItem("cartList"));
  const modalBody = modal.querySelector(
    ".flex.flex-col.items-center.justify-center.p-4"
  );

  modalBody.innerHTML = "";

  if (cartContent && cartContent.quantity > 0) {
    const itemHtml = `
     
      <div class="flex  w-full">
        <div class="w-[50px]" >
          <img  src="${cartContent.img}" alt="Product" />
        </div>
        <div class="flex flex-col items-start justify-between w-[75%]"> 
          <span class="n_dark_blue">${cartContent.product}</span>
          <div>
          <span class="text-gray-600">${formatPrice(cartContent.price)}</span>
          <span class="text-gray-600">x}</span>
          <span class="text-gray-600">Quantity: ${cartContent.quantity}</span>
          <span class="text-black font-bold">${formatPrice(
            cartContent.total
          )}</span>
          </div>
        </div>
      </div>
      <button class="rounded-md text-center flex items-center justify-center gap-2 py-2 px-10 w-full bg-[#ff7d1a] font-bold text-[16px]"> 
        Checkout
      </button>
    `;
    modalBody.innerHTML = itemHtml;
  } else {
    modalBody.innerHTML = `
      <div>
        <h4 class="n_dark_blue text-[16px] font-bold">Your cart is empty.</h4>
      </div>
    `;
  }

  // Alterna a visibilidade do modal
  modal.classList.toggle("hidden");
}
