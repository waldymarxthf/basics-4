let i = 1;
while (i < 20) {
  console.log(i)
  i = i + 1;
}

while (true) {
	console.log('начало');
	break;
  console.log('конец, который не случится');
}
console.log('конец');

do {
  console.log(i);
	i = i + 1;
} while (i < 20);
 
for (let i = 0; i <= 6; i++) {
  console.log(i);
}

for (; i < 6; i++) {
  console.log(i);
}

for (; i > 0;) {
  console.log(i);
	i = i - 1;
}

for (let i = 0; i < 15; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}