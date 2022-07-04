//1.find the number is prime or not
 //basic approach

 function basicPrime(num){
    if( num <= 1 ) return "NO"
    for(let i=2;i<num;i++){
        if(num%i===0){
            return "No"
        }
    }
    return "Yes"
 }

 console.log(basicPrime(3))

//optimise approach

function optimisedPrime(num){
    if( num <= 1 ){
         return "No"
    }
    let k = Math.ceil(num**0.5)
    if( num % 2 ===0 ){
         return "Yes"
    }
    for(let i=2;i<k;i++){
        if(num%i === 0){
            return "No"
        }
    }
    return "Yes"
}
console.log(optimisedPrime(5))


//2.Second largest frequent number

function secFreqNumber(arr){
    let map = {}
    for(let el of arr){
        map[el] = map[el]+1 || 1;
    }
    // console.log(map)
    let max =0;
    let prevMax;
    for(let el in map){
        if(map[el] >max){
            prevMax = max
            max = map[el]
        }else if(map[el] > prevMax){
            prevMax = map[el]
        }
    }
    if(prevMax === 0){
        return "No second number is present"
    }
    for(let el in map){
        if(map[el] === prevMax){
            return el;
        }
    }
}
const result = secFreqNumber([1,1,1,1,1,1,2,2,2,2,2,5,5,5,5,5,7,7,7,7,7,7,7,7,7,])
console.log(result)
