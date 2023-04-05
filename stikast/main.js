function ucFirst(string) {
  if (string.length === 0) {
    console.log("Error");
  } else {
    let newString = string[0].toUpperCase() + string.slice(1);
    console.log(newString);
  }
}

// ucFirst("dasha");

function checkSpam(string) {
  let newString = string.toLowerCase();
  if (newString.includes("viagra") || newString.includes("xxx")) {
    console.log("SPAM!");
    return;
  }
  console.log(string);
}

// checkSpam("florViaGra");

function truncate(string, maxlength) {
  if (maxlength < string.length) {
    console.log(string.slice(0, maxlength - 1) + "...");
  } else {
    console.log(string);
  }
}

// truncate("hello, my name is Dasha. I am from Latvia", 23)
// truncate("hello, my name is Dasha", 23)

function extractCurrencyValue(string) {
  let newString = string.slice(1) + string[0];
  console.log(parseInt(newString));
}

// extractCurrencyValue('$120')

function showVerticalMessage(string) {
  let newString = string;
  if (string[0] === "s") {
    newString = string[0].toUpperCase() + string.slice(1, 6);
  };
	for (let char of newString.slice(0, 6))
	console.log(char);
}

showVerticalMessage("strada");
