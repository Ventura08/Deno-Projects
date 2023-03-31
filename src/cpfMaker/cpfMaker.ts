const createFirstCheckNumber = (cpfNumbers: string, sum: number, weight: number): number => {
    if(!(cpfNumbers)){
        return (sum % 11 == 10) ? 0 : (sum % 11)
    }
    return createFirstCheckNumber(
        (cpfNumbers.substring(1)), 
        (sum += Number(cpfNumbers.charAt(0)) * weight), 
        (weight + 1)
    )
}

const createSecondCheckNumber = (cpfNumbers: string, sum: number, weight: number): number => {
    if(!(cpfNumbers)){
        return (sum % 11 == 10) ? 0 : (sum % 11)
    }
    return createFirstCheckNumber(
        (cpfNumbers.substring(1)), 
        (sum += Number(cpfNumbers.charAt(0)) * weight), 
        (weight + 1)
    )
}


const generateRandomNumbers =  (index: number, numbers:string): string => {
    if(index == 10 - 1){
        return numbers
    }
    numbers += Math.floor((Math.random() * 10))
    index++
    return generateRandomNumbers(index, numbers)
}

const generateCpf = (formated: boolean) => {
    const cpfNumbers = generateRandomNumbers(0, '') satisfies string
    const firstCheckNumber = createFirstCheckNumber(cpfNumbers, 0, 1) satisfies number
    const secondCheckNumber = createSecondCheckNumber(cpfNumbers + firstCheckNumber, 0, 0) satisfies number
    const finalValue = cpfNumbers + firstCheckNumber + secondCheckNumber;
    return (formated) ? finalValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4") : finalValue
}

generateCpf(true)

