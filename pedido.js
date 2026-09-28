//Taller integrador - Sistemas de pedidos Rappi
//Parte 1 - Los datos del cliente
let cliente = "Carlos González";
let ciudad = "Bogotá";
let clienteRappiPrime = true;

const mensajeSaludo = "Hola, " + cliente + ", ¡bienvenido a Rappi "+ ciudad + "!";
console.log(mensajeSaludo);

console.log(" ");

//Parte 2 - Los productos del pedido
let productos = ["Pizza", "Hamburguesa", "Sushi"];
console.log("Lista de productos:", productos);
console.log("Primer producto: " + productos[0]);
productos.push("Brownie");
console.log("Lista de productos actualizada: " + productos);
productos.pop();
console.log("Lista de productos después de eliminar el último producto: " + productos);
console.log("Cantidad de productos del pedido: " + productos.length);

console.log(" ");

//Parte 3 - Pedido completo como una ficha
const pedido = {
    cliente: cliente,
    ciudad: ciudad,
    productos: productos,
    estadoPedido: "En preparación"
}

console.log("========== Ficha del pedido ==========");
console.log(pedido);
console.log(" ");
console.log("Nombre del cliente:", pedido.cliente);
pedido.estadoPedido = "En camino";

console.log(pedido);

console.log(" ");

//Parte 4 - El cobro
const valorPizza = 25000;
const valorHamburguesa = 20000;
const valorSushi = 30000;
const subtotal = valorPizza + valorHamburguesa + valorSushi;

const valorDomicilio = 5000;
const propina = subtotal * 0.1; // 10% de propina del subtotal

console.log("========== Cobro del pedido ==========");
console.log("Pizza: $", valorPizza);
console.log("Hamburguesa: $", valorHamburguesa);
console.log("Sushi: $", valorSushi);
console.log("Subtotal: $", subtotal);
console.log("Domicilio: $", valorDomicilio);
console.log("Propina Sugerida (10%): $", propina);
console.log("Total: $", subtotal + valorDomicilio + propina);
console.log(" ");
console.log("Total a pagar por el pedido de " + cliente + " (sin propina): $" + (subtotal + valorDomicilio));
console.log(" ");
