function isEnoughCapacity(products, containerSize) {
   
    const quantities = Object.values(products);
  
    let totalProducts = 0;
  
    for (const quantity of quantities) {
      totalProducts += quantity;
    }
  
    return totalProducts <= containerSize;
  }

  console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false