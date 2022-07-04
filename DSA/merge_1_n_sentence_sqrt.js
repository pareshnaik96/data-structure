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
//result :[
//  {name:"c",value:444},
//  {name:"d",value:999},
//  {name:"c",value:444},
//  {name:"d",value:999}   
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








 
 


 