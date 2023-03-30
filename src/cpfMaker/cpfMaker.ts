const generateRandomNumbers =  (range: number, quantity: number, index: number, numbers:string): string => {
    if(index == quantity - 1){
        return numbers
    }
    numbers += Math.floor((Math.random() * range))
    index++
    return generateRandomNumbers(range, quantity, index, numbers)
}
const teste = generateRandomNumbers(10, 10, 0, '') satisfies string
console.log(teste)

// Math.floor((Math.random() * range['max']))