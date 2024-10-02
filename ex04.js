const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple"
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony"
  }
];

const tbody = document.querySelector("tbody");
let content = "";
products.forEach((product) => {
  content += `
  <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.brand}</td>
      </tr>

  `;
});
tbody.innerHTML = content;
