//remove duplicate element from array

// function removeDuplicate(arr){
//     let obj = {}
//      //if the no. already exists dont push it
//      // set the no. value to 1
//      // if the 1 comes in dont push
//     let newarr = []
//     for(let i=0;i<arr.length;i++){
//         if(!obj[arr[i]]){
//             newarr.push(arr[i])
//             obj[arr[i]] = 1
//         }
//     }
//     return newarr
// }


// function uniqueElement() {
//   return Array.reduce((prev, current) => {
//     // console.log(prev,current)
//     if (!prev.includes(current)) {
//       prev.push(current)
//     }
//     return prev;
//   }, [])
// }

// console.log(uniqueElement([1, 2, 3, 4, 5, 6, 1, 2, 3]))

// const array = [1, 2, 3, 2, 4, 1, 5];
// const uniqueArr = [];
// for (let i = 0; i < array.length; i++) {
//   if (uniqueArr.indexOf(array[i]) === -1) {    //  checks whether array[i] is not already present in uniqueArr
//     uniqueArr.push(array[i]);                  //  If the condition is true, it means that array[i] is not already in uniqueArr
//   }
// }
// console.log([1, 2, 3, 2, 4, 1, 5]);


// function secondLargest(arr) {
//   let largest = -Infinity
//   let second = -Infinity
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       second = largest;
//       largest = arr[i]
//     } else if (arr[i] != largest && arr[i] > second) {
//       second = arr[i];
//     }
//   }
//   return second
// }

// console.log(secondLargest([1, 2, 4, 5, 3, 7, 6]))

