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

// task#2
function getAverage(marks) {
  const length = marks.length;
  let average = marks.reduce((acc, current) => acc + current);
  let averageValue = Math.trunc(average / length);
  console.log(averageValue);
}

getAverage([15, 19, 19, 2, 19, 19, 8, 2, 9, 5, 3, 17, 10, 6, 7]);
