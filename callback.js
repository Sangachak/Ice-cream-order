
let stocks={
    fruit:["strawberry", "grapes","banana","apple"],  //we are making object of fruits
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    topping:["chocolate","peanuts"]
}


let order=(fruit_name,call_production)=>{
    setTimeout(()=>{

        console.log(`${stocks.fruit[fruit_name]} was selected`)
        call_production();

    },2000)
    
    
}

let production=()=>{

    setTimeout(()=>{
        console.log("Order received");
        
        setTimeout(()=>{
            console.log("Fruits chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

                setTimeout(()=>{
                    console.log("Machine started");

                    setTimeout(()=>{
                        console.log(`${stocks.holder[1]} selected`)
                        
                        setTimeout(()=>{
                            console.log(`${stocks.topping[1]} selected`)

                            setTimeout(()=>{
                                console.log("Ice-cream served")
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },2000)
    },1000)  

}

order(0,production);