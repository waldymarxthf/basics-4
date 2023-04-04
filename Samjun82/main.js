const showVerticalMassage = word => {
  let str = word.toLowerCase()
  str = str[0].toUpperCase() + str.slice(1)
  str = str.substring(0, 7)
//   for(let i = 0; i < str.length; i++) {     <----   первоначальный способ
// console.log(str[i])
for(const go of str) {
  console.log(go)
  }
}

showVerticalMassage('NASTRADAMUS')
