document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") ? params.get("query").toLowerCase() : "";

    // Array of menu items (replace this with real data if available)
    const menuItems = [
        { name: "Fresh Chicken Veggies", description: "Delicious chicken with fresh vegetables", price: "Rs. 499", image: "assests/images/.jpg" },
        { name: "Grilled Chicken", description: "Perfectly grilled chicken with a side of greens", price: "Rs. 359", image: "path/to/grilled-chicken.jpg" },
        { name: "Paneer Noodles", description: "Stir-fried noodles with paneer and veggies", price: "Rs. 149", image: "path/to/paneer-noodles.jpg" },
        // Add more items as needed
    ];

    const resultsContainer = document.getElementById("resultsContainer");
    let resultsFound = false;

    menuItems.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
            resultsFound = true;
            const itemElement = document.createElement("div");
            itemElement.classList.add("search-item");

            itemElement.innerHTML = `
                <div class="item-image" style="background-image: url(${item.image});"></div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="item-price">${item.price}</p>
                </div>
                <button class="add-to-cart" onclick="addToCart('${item.name}')">Add to Cart</button>
            `;
            resultsContainer.appendChild(itemElement);
        }
    });

    if (!resultsFound) {
        resultsContainer.innerHTML = "<p>No results found</p>";
    }
});

function addToCart(itemName) {
    alert(`${itemName} has been added to your cart.`);
    // Implement actual "Add to Cart" functionality as needed
}
