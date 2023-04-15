function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    const fn = (l) => {
      res.push(() => {
        return l;
      });
    };
    fn(i);
  }
  return res;
}

// variant #2
console.log(buildFun(19)[10]());

function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    let l = i;
    res.push(() => {
      return l;
    });
  }
  return res;
}

console.log(buildFun(5)[2]());
