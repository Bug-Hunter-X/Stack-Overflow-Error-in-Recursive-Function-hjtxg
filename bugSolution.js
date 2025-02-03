function foo(a, b) {
  if (a > b) {
    return false; 
  }
  if (a === b) {
    return true;
  }
  return foo(a + 1, b);
}
console.log(foo(1, 5)); // true
console.log(foo(5, 1)); // false
console.log(foo(5, 5)); // true