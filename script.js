let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("เพิ่มสินค้าแล้ว!");
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
}

function renderCart() {
  const container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div>
        ${item.name} - ฿${item.price}
        <button onclick="removeItem(${index})">ลบ</button>
      </div>
      <hr/>
    `;
  });

  document.getElementById("total").innerText = "รวมทั้งหมด: ฿" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

updateCartCount();
