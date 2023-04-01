//swap two number
// let a = 5
// let b = 10
// let temp
// temp = a
// a = b
// b = temp

//swap two number without using third variable
// let a = 5
// let b = 10
// a = a+b
// b = a-b
// a = a-b
// console.log(a,",",b)

// b = [a,a=b][0]
// console.log(a,b)
// var a = 5
// var b = 10
// [a,b] = [b,a]

// console.log(a,b)

//Swap two variable without using third variable
// x = "Some"
// y = "Good"
// x = x.concat(y)
// y = x.slice(0,4)
// x = x.slice(4)

// console.log(x,y)

// Reverse Array without using extra array
// 1st approach
// let arr = [12,4,67,2,34]

// function reverseArr(arr){

//     let i = 0
//     let j = arr.length-1
//     while(i<j){
//          arr[i] = arr[i]+arr[j]
//          arr[j] = arr[i]-arr[j]
//          arr[i] = arr[i]-arr[j]
//          i++
//          j--
//    }
//    return arr
// }
// console.log(reverseArr(arr))

// 2nd approach
// function reverseArr(arr){

//     let left = 0
//     let right = arr.length-1
//     while(left<right){
//          [arr[left],arr[right]] = [arr[right],arr[left]]
//          left++
//          right--
//    }
//    return arr
// }
// console.log(reverseArr(arr))


//Rotate an Array by kth element
// let arr = [1,2,3,4,5,6,7,8,9]

// function reverse(arr,left,right){
//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]]
//         left++
//         right--
//     }
// }
// function rotate(arrs,k){
//     reverse(arrs,0,arrs.length-1)
//     reverse(arrs,0,k-1)
//     reverse(arrs,k,arrs.length-1)
// }
// rotate(arr,3)
// console.log(arr)