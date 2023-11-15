function mergeArrays(arr1, arr2) {
    const mergedArray = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (i % 2 === 0) {
        const sum = Number(arr1[i]) + Number(arr2[i]);
        mergedArray.push(sum);
      } else {
        const concatenation = arr1[i] + arr2[i];
        mergedArray.push(concatenation);
      }
    }
  
    console.log(mergedArray.join(' - '));
  }