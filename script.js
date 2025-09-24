var cart = [];
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var buttons = document.getElementsByClassName("add-to-cart");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var card = this.closest(".card");
    var name = card.querySelector(".card-title").textContent;
    var price = parseInt(card.querySelector(".price").textContent);
    cart.push({ name: name, price: price });
    updateCart();
  };
  var Mycart = JSON.parse(localStorage.getItem("myProducts")) || [];
}
function updateCart() {
  cartItems.innerHTML = "";
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML =
      cart[i].name +
      ' - <span class="text-danger">' +
      cart[i].price +
      " EGP</span>" +
      ' <button class="delete-btn" onclick="removeFromCart(' +
      i +
      ')">Delete</button>';
    cartItems.appendChild(li);
  }
  cartTotal.textContent = total;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
