


function conversion(value, type) {
    if (type=="cel") {
        far=(value*(9/5))+32
        console.log(`Dado de entrada em Celsius: ${value} °C`)
        console.log(`Dado de saída em Fahrenheit: ${far.toFixed(1)} °F`)
    } else if (type=="far") {
        cel=(value-32)*(5/9)
        console.log(`Dado de entrada em Fahrenheit: ${value} °F`)
        console.log(`Dado de saída em Celsius: ${cel.toFixed(1)} °C`)
    }
}


conversion(88,"far")