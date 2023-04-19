let stocks={
    fruit:["strawberry", "grapes","banana","apple"],  //we are making object of fruits
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    topping:["chocolate","peanuts"]
}

let is_shop_open=true;

let order=(time,work)=>{

return new Promise((resolve,reject)=>{ 

    if(is_shop_open){

        setTimeout(()=>{
            resolve(work());
        },time)
        
    }else{
        reject(console.log("Shop is closed"));
    }

})

}
order(2000,()=>{console.log(`${stocks.fruit[1]} was selected`)})

.then(()=>{
    return order(1000,()=>console.log("Production started"))
})

.then(()=>{
    return order(2000,()=>console.log("Fruit chopped"))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} was selected`))
})

.then(()=>{
    return order(1000,()=>console.log("Machine started"))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.holder[0]} selected`))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.topping[1]} topped`))
})

.then(()=>{
    return order(2000,()=>console.log("Ice-cream served"))
})

.catch(()=>{
    console.log("customer left");
})

.finally(()=>{
    console.log("Shop closed for today");//this message will appear no matter true or false
})