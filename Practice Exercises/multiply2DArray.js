function multiplyArray(arr) {
       for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
console.log(product);
    return product;
  }
  multiplyArray([[1,2],[3,4],[5,6,7]]);
  multiplyArray([[4],[5],[6]]);