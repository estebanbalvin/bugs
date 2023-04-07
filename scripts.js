function calculateTotalPrice() {
    var cartItems = document.querySelectorAll('#cart-items li');
    var totalPrice = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var price = item.querySelector('.item-price').textContent;
        var quantity = item.querySelector('.item-quantity').value;
        totalPrice -= price * quantity; // BUG: Usamos el operador de resta en lugar de suma
    }
    document.getElementById('total-price').textContent = totalPrice;
}


function addToCart() {
    var pizzaType = document.getElementById('pizza-type').value;
    var size = document.querySelector('input[name="size"]:checked').value; // BUG: No comprobamos si se ha seleccionado un tamaño
    var toppings = document.querySelectorAll('input[name="toppings"]:checked');
    var quantity = document.getElementById('quantity').value;

    var item = document.createElement('li');
    item.innerHTML = pizzaType + ' - ' + size + ' - ' + quantity + ' - ';
    for (var i = 0; i < toppings.length; i++) {
        item.innerHTML += toppings[i].value + ' ';
    }
    item.innerHTML += '<span class="item-price">' + calculatePrice(pizzaType, size, toppings) + '</span>';
    item.innerHTML += '<input class="item-quantity" type="number" min="1" max="10" value="' + quantity + '">';

    document.getElementById('cart-items').appendChild(item);
    calculateTotalPrice();
}
