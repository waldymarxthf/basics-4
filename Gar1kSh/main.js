createCounter = () => {
  let count = 1;
  return (counter = () => {
    console.log(count);
    count++;
  });
};

let counterA = createCounter();
let counterB = createCounter();
counterA();
counterA();
counterA();
counterB();
counterB();
