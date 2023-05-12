const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// const newArray = [];
// for(let i = 0; i < letters.length; i++) {
//   const element = letters[i];
//   newArray.push(element.toUpperCase())
// }
const newArray = letters.map(element => element.toUpperCase())
console.log('Original ', letters)
console.log('Nuevo ', newArray)

