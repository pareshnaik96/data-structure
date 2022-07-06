//1.filter out duplicate element and give the unique elements in an array

arr=[1,1,2,22,3,5,1,2]
function uniqueElement(arr){
    let map = new Map()
    for(i=0;i<arr.length;i++){
        if(map.get(arr[i]) == undefined){
            map.set(arr[i],1)
        }else{
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
    let result = []
    for(let item of map){
        if(item[1] == 1){
            result.push(item[0])
        }
    }
    return result
}

console.log(uniqueElement([1,1,2,22,3,5,1,2]))

//2.find the duplicate elements in an array

function duplicateElement(arr){
    let map = new Map()
    for(i=0;i<arr.length;i++){
        if(map.get(arr[i]) == undefined){
            map.set(arr[i],1)
        }else{
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
    let result = []
    for(let items of map){
        if(items[1] > 1){
            result.push(items[0])
        }
    }
    return result
}
console.log(duplicateElement([1,4,3,2,5,6,7,1,2,3,4,5]))

//3.Return the most frequency element ia an array

function mostFrequencyElement(arr){
    let map = new Map()
    if(!arr.length) return null
    let maxFreq = 1
    let maxFreqElem = arr[0]
    for(i=0;i<arr.length;i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
            if(maxFreq < map.get(arr[i])){
                maxFreq = map.get(arr[i])
                maxFreqElem = arr[i]
            }
        }else{
            map.set(arr[i],1)
        }
    }
    return maxFreqElem
}

console.log(mostFrequencyElement([1,2,3,4,5,6,7,8,1,1,1,1,2,2,3,3]))

//4.Find the unique pair of elements(inside an array) whose sum is equal to a target k

function pairSum(arr,sum){
    let map = {}
    for(let el of arr){
        map[el] = map[el]+1 || 1
    }
    let pair = {}
    for(let el of arr){
        let temp = sum-el
        if(map[temp]){
            if(pair[el] === undefined && pair[temp] === undefined){
                pair[el] = temp
            }
        }
    }
    return Object.keys(pair).length !==0 ? Object.keys(pair).length : -1
}
console.log(pairSum([7,2,4,6,9,11,34,3,2,1],5))


//5.Find maximum sum of 2 element in an array

function largestTwoNumberSum(arr){
      let firstMax = arr[0]
      let secondMax = -Infinity
      for(let i=0;i<arr.length;i++){
      if(arr[i]> firstMax){
            secondMax= firstMax
            firstMax= arr[i]
        }else if(arr[i]>secondMax){
            secondMax = arr[i]
        }
      }
      return (firstMax+secondMax)
}

console.log(largestTwoNumberSum([4,8,5,3,6,1,2,3,9]))

//6.Given an array like [1,1,2,22,3,5,11,2] filter duplicate elements and unique element in arr.
//output [1,2,22,3,5,11]

function removeDuplicates(arr){

    const set = new Set(arr)
    return [...set]
}
console.log(removeDuplicates([1,1,2,22,3,5,11,2,22,2,2,2,2,2]))


//7.Take an input and check wheather the input is an integer or not
//1st approach
function isValidNumber(input=''){

    let isNumber = true

    for(let i=0;i<input.length;i++){
        if(input[i] >= '0' && input[i] <= '9'){
            continue;
        }
        else{
            isNumber = false;
            break;
        }
    }
    return isNumber
}
console.log(isValidNumber("12345678"))

//2nd approach
function checkInt(input){
    let pattern = /^-?[0-9]+$/;
    let result = pattern.test(input)
    return result
}

console.log(checkInt(112))


//8.Take a number and if number is multiple of 3 print "Foo",if multiple of 5 "Bar" and if number is multiple of 3 & 7 print "FooBar"
//If not a multiple of either , print nothing

function printNum(num){
    //if num is multiple of 3 then num%3=0
    if(num % 3 === 0){
        console.log("Foo")
    }
    //if num is multiple of 5 then num%5=0    
    else if(num % 5 === 0 && num % 7!==0){
        console.log("Bar")
    }
    //if num is multiple of 5 & 7 then num%5=0  and num%7=0
    else if(num % 5 === 0 && num % 7 === 0){
        console.log("FooBar")
    }
    else{
        console.log("nothing")
    }
}

 printNum(15)
 printNum(20)
 printNum(35)
 printNum(16)