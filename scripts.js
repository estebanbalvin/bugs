// Variables globales
var cartItems = [];
var totalPrice = 0;

// Función para añadir una pizza al carrito
function addToCart() {
    // Obtener los datos de la pizza seleccionada
    var pizzaOption = document.querySelector('input[name="margarita-size"]:checked, input[name="hawaiana-size"]:checked').parentNode;
    var pizzaName = pizzaOption.querySelector('h3').textContent;
    var pizzaSize = pizzaOption.querySelector('input[name$="-size"]:checked').value;
    var pizzaPrice = parseInt(pizzaOption.querySelector('input[name$="-size"]:checked').getAttribute('data-price'));
    var pizzaToppings = [];

    // Añadir los toppings seleccionados a la lista de toppings de
    // Añadir los toppings seleccionados a la lista de toppings de la pizza
    var checkboxes = pizzaOption.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        pizzaToppings.push(checkboxes[i].value);
    }

    // Crear un objeto que represente la pizza seleccionada
    var pizza = {
        name: pizzaName,
        size: pizzaSize,
        toppings: pizzaToppings,
        price: pizzaPrice
    };

    // Añadir la pizza al carrito
    cartItems.push(pizza);

    // Actualizar la lista de items del carrito en el HTML
    var cartList = document.getElementById('cart-items');
    var newItem = document.createElement('li');
    var itemText = pizzaName + ' - ' + pizzaSize + ' - ' + pizzaPrice + '€';
    newItem.textContent = itemText;
    cartList.appendChild(newItem);

    // Actualizar el precio total en el HTML
    totalPrice += pizzaPrice;
    var totalText = totalPrice + '€';
    document.getElementById('total-price').textContent = totalText;
}

// Función para realizar la compra
function checkout() {
    // Mostrar un mensaje de confirmación
    var message = 'Has comprado las siguientes pizzas:\n\n';
    for (var i = 0; i < cartItems.length; i++) {
        var pizza = cartItems[i];
        var itemText = pizza.name + ' - ' + pizza.size + ' - ' + pizza.price + '€';
        message += itemText + '\n';
    }
    message += '\nPrecio total: ' + totalPrice + '€\n\n¿Estás seguro de que quieres realizar la compra?';
    var confirmed = confirm(message);

    // Si el usuario confirma, resetear el carrito
    if (confirmed) {
        cartItems = [];
        totalPrice = 0;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total-price').textContent = totalPrice + '€';
        alert('¡Gracias por tu compra!');
    }
}

// Asignar los manejadores de eventos
document.getElementById('add-to-cart').addEventListener('click', addToCart);
document.getElementById('checkout').addEventListener('click', checkout);
