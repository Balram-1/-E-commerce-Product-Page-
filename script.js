const products = [
    { name: "Wireless Headphones", price: 129.99, rating: 5, category: "Electronics" },
    { name: "Cotton T-Shirt", price: 24.99, rating: 4, category: "Clothing" },
    { name: "Bluetooth Speaker", price: 89.99, rating: 3, category: "Electronics" },
    { name: "Denim Jeans", price: 59.99, rating: 4, category: "Clothing" },
    { name: "Coffee Maker", price: 45.00, rating: 5, category: "Home" },
    { name: "Running Shoes", price: 75.00, rating: 4, category: "Clothing" },
    { name: "Gaming Mouse", price: 49.99, rating: 5, category: "Electronics" },
    { name: "Watch", price: 199.99, rating: 4, category: "Electronics" },
    { name: "Leather Wallet", price: 30.00, rating: 3, category: "Accessories" },
    { name: "Perfume", price: 20.00, rating: 5, category: "Home" },
    { name: "Desk Lamp", price: 15.00, rating: 4, category: "Home" },
    { name: "Backpack", price: 55.00, rating: 4, category: "Accessories" },
    { name: "Sunglasses", price: 120.00, rating: 5, category: "Accessories" },
    { name: "Keyboard", price: 80.00, rating: 4, category: "Electronics" },
    { name: "Hoodie", price: 40.00, rating: 3, category: "Clothing" },
    { name: "Water Bottle", price: 12.00, rating: 4, category: "Home" },
    { name: "Monitor", price: 250.00, rating: 5, category: "Electronics" },
    { name: "Bottle", price: 15.00, rating: 2, category: "Clothing" },
    { name: "Power Bank", price: 35.00, rating: 4, category: "Electronics" },
    { name: "Laptop Stand", price: 25.00, rating: 5, category: "Electronics" }
];

function displayProducts(data) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; 

    data.forEach(p => {
        grid.innerHTML += `
            <div class="container">
                <h4><b>${p.name}</b></h4>
                <p>$${p.price}</p>
                <p>${p.rating} ⭐</p>
                <button class="button">${p.category}</button>
            </div>
        `;
    });
}

function updateUI() {
    const catValue = document.getElementById("categoryFilter").value;
    const sortValue = document.getElementById("sortOptions").value;

    let filtered = products.filter(p => {
        return catValue === "all" || p.category === catValue;
    });

    if (sortValue === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sortValue === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortValue === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
    if (sortValue === "rating-high") filtered.sort((a, b) => b.rating - a.rating);

    displayProducts(filtered);
}

// Initial load
displayProducts(products);