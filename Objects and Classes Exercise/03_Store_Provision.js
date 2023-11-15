function updateStock(currentStock, orderedProducts) {
    let stock = {};
  
    for (let i = 0; i < currentStock.length; i += 2) {
      let productName = currentStock[i];
      let quantity = Number(currentStock[i + 1]);
  
      stock[productName] = quantity;
    }
  
    for (let i = 0; i < orderedProducts.length; i += 2) {
      let productName = orderedProducts[i];
      let quantity = Number(orderedProducts[i + 1]);
  
      if (stock.hasOwnProperty(productName)) {
        stock[productName] += quantity;
      } else {
        stock[productName] = quantity;
      }
    }
  
    for (let product in stock) {
      console.log(`${product} -> ${stock[product]}`);
    }
  }
  
  // Example usage
  updateStock(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
  );