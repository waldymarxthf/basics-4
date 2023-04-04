function showVerticalMessage(str) {
  const MAX_LENGTH = 6;

  str = str.trim().replace(/\s/g, "").toLowerCase();

  if (typeof str !== "string" || str.length < MAX_LENGTH || str[0] !== "s") {
    console.log("Неверный ввод.");
    return;
  }

  for (let i = 0; i < MAX_LENGTH; i++) {
    const char = str[i];

    if (i === 0) {
      console.log(`\\\\\t${char.toUpperCase()}`);
    } else {
      console.log(`\\\\\t${char}`);
    }
  }
}

showVerticalMessage(" s trAd Aghj ");
