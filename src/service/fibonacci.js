const fibonacci = (num) => {
  var num = num - 1;
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};

module.exports = fibonacci;
