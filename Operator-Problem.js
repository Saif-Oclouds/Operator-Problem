
function expressionSolver(arr){
    let solvedArray = arr.map(element=>{
         if(Array.isArray(element)){
             if(Array.isArray(element[1]) && Array.isArray(element[2])) {
                 return '(' + expressionSolver(element) + ')'
             }
             return expressionSolver(element)
         }
         else{
             return element
         }
     })
      return solvedArray[1]+solvedArray[0]+solvedArray[2];
  }
  
  console.log(expressionSolver(['OR', ['<', 'a', 'b'], ['AND',['==','c','d'],['!=','e','f']]]))