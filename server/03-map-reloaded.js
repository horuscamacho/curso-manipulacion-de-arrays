const orders = [
    {
        costumerId: 1,
        total: 60,
        delivered: true
    },
    {
        costumerId: 2,
        total: 120,
        delivered: false
    },
    {
        costumerId: 3,
        total: 80,
        delivered: true
    },
    {
        costumerId: 4,
        total: 32,
        delivered: true
    }
];
console.log('Array original ', orders)

const rta = orders.map(item => item.total)
console.log('Array de totales ', rta)

const modified = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
})

console.log('Array modificado ', modified)

console.log('Array original 2', orders)