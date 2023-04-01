//Binary search
//time complexity are of 3 types-
//  -Best case scenario : O(1)
//  -Avg case scenario : O(logn)
//  -Worst case scenario : O(logn)

// function binarySearch(arr, start, end, num) {
//     if (end >= start) {
//         mid = Math.round(start + end) / 2

//         if (num == arr[mid]) return mid
//         else if (num > arr[mid]) return binarySearch(arr, mid + 1, end, num)
//         else if (num < arr[mid]) return binarySearch(arr, start, mid - 1, num)
//     }
//     return false
// }

// console.log(binarySearch([1, 5, 6, 7, 8, 9], 0, 6, 7))

//Bubble sort : simplest and also popular
//Time complexity:O(n^2)
//  -best case : n
//  -avg case : n*n
//  -worst case : n*n

// function bubble(arr){

//     for(let i=0;i<=arr.length-1;i++){

//         let swap = false

//         for(let j=0;j<=arr.length-2;j++){
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 arr[j] = arr[j] + arr[j+1]
//                 arr[j+1] = arr[j] - arr[j+1]
//                 arr[j] = arr[j] - arr[j+1]
//                 swap = true
//             }
//         }

//         if( swap == false ) break
//     }
//     return arr
// }
// let arr = [223,12,6,89,34,56]
// bubble(arr)
// console.log(arr)

//Merge sort
// step1:Recursion
// step2:Merge

//Time complexity: O(nlogn)
//  -best case : nlogn
//  -avg case : nlogn
//  -worst case : nlogn

// function mergeSort(arrayX, start, end) {

//     if (start >= end) return

//     let mid = Math.round((start + end) / 2)
//     mergeSort(arrayX, start, mid)
//     mergeSort(arrayX, mid + 1, end)

//     merge(arrayX, start, mid, end)
// }

// function merge(arrayX, start, mid, end) {

//     let arr1 = []
//     let arr2 = []

//     //logic
//     let lenArr1 = mid - start + 1
//     let lenArr2 = end - mid

//     //copy the data in the respective arrays
//     for (let i = 0; i < lenArr1; i++) {
//         arr1[i] = arrayX[start + i]
//     }
//     for (let j = 0; j < lenArr2; j++) {
//         arr2[j] = arrayX[mid + 1 + j]
//     }

//     let a = 0  //index of arr1
//     let b = 0  //index of arr2
//     let c = start //index of arrayX

//     while (a < lenArr1 && b < lenArr2) {
//         if (arr1[a] <= arr2[b]) {
//             arrayX[c] = arr1[a]
//             a++
//         }
//         else {
//             arrayX[c] = arr2[b]
//             b++
//         }
//         c++
//     }
//     while (a < lenArr1) {
//         arrayX[c] = arr1[a]
//         a++
//         c++
//     }
//     while (b < lenArr2) {
//         arrayX[c] = arr2[b]
//         b++
//         c++
//     }
// }

// let array = [1, 5, 9, 8, 35, 98, 223, 12, 6, 89, 34, 56]
// console.log(mergeSort(array, 0, array.length - 1))


// Merge function from earlier
//merge sort
// function which merge sorted arrays
// function merge(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let result = []

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] > arr2[j]) {
//             result.push(arr2[j])
//             j++
//         }
//         else {
//             result.push(arr1[i])
//             i++
//         }
//     }
//     while (i < arr1.length) {
//         result.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) {
//         result.push(arr2[j])
//         j++
//     }

//     return result
// }

// console.log(merge([100, 200], [1, 2, 3, 4, 5]));


// function mergeSort(arr) {
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

// console.log(mergeSort([24, 73, 86, 10]));

//O(nlogn)
//merge sort is of 3 steps ,
/*
1.splitting
2.sorting
3.merging
-decomposing arr into array of 0 or 1 element
-as merge sort sorts the sorted arrays, & 0 or 1 element arrays are already sorted
*/

