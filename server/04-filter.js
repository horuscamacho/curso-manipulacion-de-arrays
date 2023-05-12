const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const orders = [
    {
        costumerId: 1,
        costumerName: 'Jhon',
        total: 160,
        delivered: true
    },
    {
        costumerId: 2,
        costumerName: 'Jane',
        total: 120,
        delivered: false
    },
    {
        costumerId: 3,
        costumerName: 'Dave',
        total: 80,
        delivered: true
    },
    {
        costumerId: 4,
        costumerName: 'Mike',
        total: 32,
        delivered: true
    }
];
// const newArr = []
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length >= 6) {
//     newArr.push(words[i])
//   }
// }
console.log('Original ', words)

const newArr = words.filter(word => word.length >= 6)

console.log('Nuevo ', newArr)


console.log('Original 2', words)

const delivered = orders.filter(item => item.delivered && item.total >= 100)

console.log('Delivered ', delivered)

const search = (query) => {
    return orders.filter(order => order.costumerName.includes(query))
}

console.log('Search ', search('a'))