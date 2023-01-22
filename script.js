x = 121;

var isPalindrome = function (x) {
  x = x.toString();
  let z = x.length - 1;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== x[z]) {
      return false;
    }
    z--;
  }
  return true;
};

console.log(isPalindrome(x));
