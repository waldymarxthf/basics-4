const operations = {
  add: "+",
  sub: "-",
  mul: "*",
  div: "/",
};

function calc(a, b, operation) {
  const operations = {
    add: {action: a + b, sign: "+"},
    sub: {action: a - b, sign: "-"},
    mul:{action:  a * b, sign: "*"},
    div: {action: a / b, sign: "/"},
  };

  const validation = {
    isValidOperation: Object.keys(operations).includes(operation),

    isValidNumbers(...numbers) {
      return numbers.filter(Number.isFinite).length === numbers.length;
    },
  };

  if (validation.isValidNumbers(a, b) && validation.isValidOperation) {
    let result = operations[operation].action;

    if (!Number.isFinite(result)) return "Error";
    
    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }

    return result.toString().slice(0, 30);
  }
  return "Error";
}

const resultButton = document.querySelector("#result-button");
const results = document.querySelector(".results")
resultButton.addEventListener("click", () => {
  const numberNodes = Array.from(document.querySelectorAll("input"));
  const numbers = numberNodes.map((node) => Number.parseFloat(node.value) );
  const operation = document.querySelector(".current div").dataset.value;
  const result = calc(...numbers, operation);
  const resultNode = document.querySelector("#result");

  if (result) resultNode.textContent = result;

  const historyResult = document.createElement("div")
  historyResult.classList.add("rectangle")
  historyResult.textContent = `${numbers[0]} ${operations[operation]} ${numbers[1]} = ${result}`;
  results.appendChild(historyResult)
  results.scrollTop = results.scrollHeight

  historyResult.addEventListener("click", historyResult.remove)
});
