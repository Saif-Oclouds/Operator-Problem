function expressionSolver(arr){
    const [operator, ...rest] = arr
    if(Array.isArray(rest[0])) {
        rest[0] = expressionSolver(rest[0])
    }
    if(Array.isArray(rest[1])) {
        rest[1] = expressionSolver(rest[1])
    }
    
    return `( ${rest[0]} ${operator} ${rest[1]} )`
}

console.log(expressionSolver(['OR', ['<', 'a', 'b'], ['AND',['==','c','d'],['!=','e','f']]]))