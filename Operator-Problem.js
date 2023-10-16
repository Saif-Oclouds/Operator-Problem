function expressionSolver(arr){
    const [operator, ...operands] = arr
    if(Array.isArray(operands[0])) {
        operands[0] = expressionSolver(operands[0])
    }
    if(Array.isArray(operands[1])) {
        operands[1] = expressionSolver(operands[1])
    }
    
    return `( ${operands[0]} ${operator} ${operands[1]} )`
}

console.log(expressionSolver(['OR', ['<', 'a', 'b'], ['AND',['==','c','d'],['!=','e','f']]]))