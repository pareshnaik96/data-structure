//1.we have given array as input containing 0's and 1's we need to sort an array
//first approach

// function sort01(arr){
//     let curr=0,count0=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//         count0++
//         }
//     }
//     let count1=arr.length-count0
//     while(count0>0){
//         arr[curr]=0
//         count0--
//         curr++
//     }
//     while(count1>0){
//         arr[curr]=1
//         count1--
//         curr++
//     }
// }
// const arr=[1,1,1,0,0,1,0,1,0,1,1]
// sort01(arr)
// console.log(arr)

//second approach

// function sort01(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         while (arr[left] == 0 && left < right) {
//             left++;
//         }
//         while (arr[right] == 1 && left < right) {
//             right--;
//         }

//         if (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]]
//         }
//     }

// }

// const arr = [0,1,0,1,0,0,1,1,0,0,0,1]
// sort01(arr)
// console.log(arr)

//2.In an array find the element without a pair e.g. [11,1,7,11,1,2,2,3,3,3,48,4,4,48]  here 3 and 7

// function withoutPair(arr){
//      let map = new Map();
//      for(let curr of arr){
//         if(map.get(curr)){  // current value find in array
//             map.set(curr,map.get(curr)+1)
//         }else{
//             map.set(curr,1);
//         }
//     }

//     for(let val of map){
//         if(val[1]%2===1){
//             console.log("without pair number is" ,val[0]);
//         }

//     }

// }
// withoutPair([11,1,7,11,1,2,2,3,3,3,48,4,4,48])

//3.write a function to calcuate the max sum of three consecutive element in an array

// function SimpleMaxSumOf3Consecutive(arr){
//     if(arr.length<3){
//     return 
//     }
//     let currMax=-Infinity
//     for(let i=0;i<arr.length-3;i++){
//         if(arr[i]+arr[i+1]+arr[i+2]>currMax){
//             currMax=arr[i]+arr[i+1]+arr[i+2]
//         }
//     }
//     return currMax
// }
// console.log(SimpleMaxSumOf3Consecutive([11,1,7,11,1,2,2,3,3,3,48,4,4,48]))

//4.write a function to calculate the max sum of k consecutive element in an array

// function SimpleMaxSumOf3Consecutive(arr,k){
//     if(arr.length < k){
//         return
//     }
//     let currMax = -Infinity;
//     let totalSum = 0; leftWindowItemSum = 0;
//     for(let i=0;i<k;i++){
//         totalSum += arr[i]
//     }
//     currMax = totalSum
//     for(let i=k;i<arr.length;i++){
//         leftWindowItemSum += arr[i-k]  //last remove element
//         totalSum += arr[i]
//         if(totalSum - leftWindowItemSum > currMax){
//             currMax = totalSum - leftWindowItemSum;
//         }
//     }
//     return currMax
// }
// console.log(SimpleMaxSumOf3Consecutive([11,1,7,11,1,2,2,3,3,3,48,-100,4,48],3))

