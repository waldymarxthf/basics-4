const сalc = (operation, a, b) => {
  switch(operation) {
    case 'add': console.log(a + b);
    break
    case 'multi': console.log(a * b);
    break
    case 'subtract' :  console.log(a - b);
    break
  }
};


сalc('add', 1, 2);
сalc('multi', 1, 2);
сalc('subtract', 3, 2);









