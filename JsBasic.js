var products = [
    {name: 'ip 7', price: 1000000}, 
    {name: 'ip 8', price: 2000000}, 
    {name: 'ip 9', price: 3000000}, 
    {name: 'ip 9', price: 4000000}, 
]

var tongtien = products.reduce(function(tong,product){
    return tong + product.price
},0)

console.log(tongtien)