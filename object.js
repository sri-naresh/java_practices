let user = {
name:'naresh mallela',
email:'sri..naresh1@gmail.com',
cell:'6302895467',
address:
{
    HNo:'3-56,kasipadu',
    Location:'kasipadu',
    Pincode:522436
}, orders:[
        {oid:01,orderdate:'26th june,,2023',amount:200},
        {oid:01,orderdate:'26th june,,2023',amount:300},
        {oid:01,orderdate:'26th june,,2023',amount:600}
]

}
console.log((user));
console.log(typeof user);
console.log("user name is: "+ user.name);
console.log('orders places are'+user['orders'][1]['amount']);

var product={
pid:100,
name:'shoes',
brand:'aadidas',
cost:1200,
models:[{size:6,units:10},{size:7,units:12},{size:9,units:20},{size:12,units:30}]

}
console.log(product); 
product.models[2].units=5
console.log(product);s