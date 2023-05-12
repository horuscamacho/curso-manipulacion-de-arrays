const totals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
for(let i = 0; i < totals.length; i++) {
    sum = sum + totals[i]
}

console.log('Suma ', sum)

const rta = totals.reduce((sum, item) => sum + item, 10)

console.log('Suma con reduce ', rta)