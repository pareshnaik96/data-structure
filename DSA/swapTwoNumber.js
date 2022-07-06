//swap two number without using third variable
let a = 5
let b = 10 
a = a+b
b = a-b
a = a-b
console.log(a,",",b)

b = [a,a=b][0]
console.log(a,b)
// var a = 5
// var b = 10 
// [a,b] = [b,a]

// console.log(a,b)

//Swap two variable without using third variable
x = "Some"
y = "Good"
x = x.concat(y)
y = x.slice(0,4)
x = x.slice(4)

// console.log(x,y)

// Reverse Array without using extra array
// 1st approach
let arr = [12,4,67,2,34]

function reverseArr(arr){

    let i = 0
    let j = arr.length-1
    while(i<j){
         arr[i] = arr[i]+arr[j]
         arr[j] = arr[i]-arr[j]
         arr[i] = arr[i]-arr[j]
         i++
         j--
   }
   return arr
}
// console.log(reverseArr(arr))

// 2nd approach
function reverseArr(arr){

    let left = 0
    let right = arr.length-1
    while(left<right){
         [arr[left],arr[right]] = [arr[right],arr[left]]
         left++
         right--
   }
   return arr
}
console.log(reverseArr(arr))


//Rotate an Array
let array = [12,3,6,2,9,11]

function reverse(array){

    let i = 0
    let j = array.length-1
    while(i<j){
         array[i] = array[i]+array[j]
         array[j] = array[i]-array[j]
         array[i] = array[i]-array[j]
         i++
         j--
   }
   return array
}
// console.log(reverseArr(array))
function rotateArr(array){

reverse(array,0,array.length-1)
reverse(array,0,1)
reverse(array,2,array.length-1)

}
// console.log(rotateArr(array))