let products = [
    {name: "Computador", category: "Electónicos", price: 600},
    {name: "Telemóvel", category: "Electrónicos", price: 450},
    {name: "Teclado", category: "Acessório", price: 60}
];

let mylist = document.getElementById('productList');

for(i = 0; i < products.length; i++) {

    let product = products[i];

    let listItem = document.createElement("li");

    listItem.textContent = product.name + " (" + product.category + "): " + product.price + " €";

    myList.appendChild(listItem);

}