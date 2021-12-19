
//Example 1
function ispositive(element, index, array) {
    return element > 0;
  }
  console.log('Is all elementes positive :' + [11, 89, 23, 7, 98].every(ispositive)); 

//Example 2
function isodd(element, index, array) {
    return (element % 2 == 1);
  }
  console.log('Is all elementes odd :' + [56, 91, 18, 88, 12].every(isodd));

  //Example 3
function isEven(element, index, array) {
    return (element % 2 == 0);
  }
  console.log('Is all elementes even :' + [56, 92, 18, 88, 12].every(isEven));

/* Output
Is all elementes positive :true
Is all elementes odd :false
Is all elementes even :true
*/