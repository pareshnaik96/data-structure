//1.write a function to merge these two arrays & result should be
 let array1 = [
    {name:"a",value:123},
    {name:"b",value:666}
 ];
 let array2 = [
    {name:"c",value:444},
    {name:"d",value:999},
    {name:"b",value:111}
 ];
// result :[
//     { name: 'a', value: 123 },
//     { name: 'b', value: 111 },
//     { name: 'c', value: 444 },
//     { name: 'd', value: 999 }   
// ];

function mergeArrays(arr1,arr2,result=[]){
 let arr1CurrIndex = 0;
 let arr2CurrIndex = 0;
 let obj = {};

 while(arr1CurrIndex < arr1.length && arr2CurrIndex < arr2.length){
    
    if(arr1[arr1CurrIndex].name > arr2[arr2CurrIndex].name){
        if(!obj[arr2[arr2CurrIndex].name])
             result.push(arr2[arr2CurrIndex]);
        else{
            result[obj[arr2[arr2CurrIndex].name]] = arr2[arr2CurrIndex];
            }
            obj[arr2[arr2CurrIndex].name] = result.length-1;
            arr2CurrIndex++;
    }
    else{
        if(!obj[arr1[arr1CurrIndex].name])
            result.push(arr1[arr1CurrIndex]);
        else{
           result[obj[arr1[arr1CurrIndex].name]] = arr1[arr1CurrIndex];
       }
          obj[arr1[arr1CurrIndex].name] = result.length-1;
          arr1CurrIndex++;
    }

}
//if arr1 element exhaust
while(arr2CurrIndex < arr2.length){
    if(!obj[arr2[arr2CurrIndex].name])
           result.push(arr2[arr2CurrIndex]);
    else{
       result[obj[arr2[arr2CurrIndex].name]] = arr2[arr2CurrIndex];
   }
   obj[arr2[arr2CurrIndex].name] = result.length-1;
   arr2CurrIndex++;
}
//if arr2 element exhaust
while(arr1CurrIndex < arr1.length){
    if(!obj[arr1[arr1CurrIndex].name])
        result.push(arr1[arr1CurrIndex]);
    else{
        result[obj[arr1[arr1CurrIndex].name]] = arr1[arr1CurrIndex];
       }
       obj[arr1[arr1CurrIndex].name] = result.length-1;
       arr1CurrIndex++;
}

}

let result = []
mergeArrays(array1,array2,result)
console.log(result)

//2. sentence = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//max word in the sentence

function maximumWord(sentences){
    let max = 0;
    for(let currSentence of sentences){
       let currWordCount = currSentence.split(" ").length
       if(currWordCount > max){
          max = currWordCount;
       }
    }
    return max
}
console.log(maximumWord(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

//3.find square root of a number

//recursion approach

// function squareRoot(number,left,right){

//       let mid = (left+right)/2
//       let mul = mid*mid;

//       if(mul === number || (Math.abs(mul-number)<0.00001)){
//         return mid;
//      }
//      else if(mul > number){
//         return squareRoot(number,left,mid)
//      }
//      else{
//         return squareRoot(number,mid,right)
//      }
// }

//Iterative approach

function squareRoot(number,left,right){

    while(true){
        let mid = (left+right)/2
        let mul = mid*mid

        if(mul === number || (Math.abs(mul-number)<0.00001)){
            return mid;
       }
       else if(mul > number){
         right = mid
       }
       else{
        left = mid
       }
    }
}


function findSqrt(number){

    let found = false;
    let i = 1;

    while( found === false){
        if(i*i === number){
            found = true;
            console.log(i)
        }
        else if(i*i > number){
            var res = squareRoot(number,i-1,i)
            console.log( +res.toFixed(5))
            found = true;
        }
        i++
    }
}

findSqrt(25)

//4.Missing number in an unsorted array
//array having number 1 to n contiguously
// 1,2,3,4,5,7,8,9 missing 6
// 1,2,4,5,6,7,8,9 missing 3
//missing number 1 to n

function missingNumber1n(arr){

    let maxNumber = Math.max(...arr)
    let totalSum = 0;

    for(let i=0;i<arr.length;i++){
        totalSum +=arr[i];
    }
    return (maxNumber*(maxNumber+1)/2) - totalSum 
}

//start from k,k+1,k+2,k+3,k+4,k+5,k+6,k+7,k+8........

function missingNumber(arr=[]){

    let min = Math.min(...arr)

    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]-(min-1)
    }
    let missNumber1n = missingNumber1n(arr)
    return missNumber1n+min-1
}
console.log(missingNumber([8,9,10,11,12,13,15]))







 
 


 