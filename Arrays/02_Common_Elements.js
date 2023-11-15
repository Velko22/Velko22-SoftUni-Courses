function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (const element of arr1) {
      if (arr2.includes(element)) {
        commonElements.push(element);
      }
    }
  
    commonElements.forEach((element) => console.log(element));
  }