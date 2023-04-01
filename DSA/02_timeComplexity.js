// in array access of an element time complexity is O(1)
// add element in end of the array O(1) arr.push(20)
// remove element from end of an array O(1) arr.pop()

// insertion in begining is the array
// (operation performed) insertion O(1)+ rearrangement of index O(n)
// total time complexity of insertion in begining of the array is O(n)

// object
var obj = {}  // time complexity = O(1)

obj.firstName = "paresh"   // obj.key =>insertion time complexity = O(1)
obj.lastName = "naik"
obj.age = 25
obj.designation = "backend developer"

console.log(obj)

// access time complexity O(1)
console.log(obj.firstName,obj['firstName'])

// deletion time complexity O(1)

// searching time complexity = worst case O(n)

// time complexity of Object.keys is O(n)
console.log(Object.keys(obj))

// time complexity of Object.values is O(n)
console.log(Object.values(obj))

// time complexity of Object.entries is O(n)
console.log(Object.entries(obj))

// time complexity of Object.hasOwnProperty is O(1)
console.log(obj.hasOwnProperty('age'))





