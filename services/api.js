const ApiService = (function () {
    async function fetchProducts() {
        try {
            let response = await fetch("https://dummyjson.com/products/category/groceries?limit=6");
            if (!response.ok) {
                throw new Error("Failed to load data from server");
            }
            let data = await response.json();
            return data.products;
        } catch (error) {
            throw new Error("Error loading products: " + error.message);
        }
    }

    return {
        fetchProducts: fetchProducts
    };
})();
