// Timecomplexity: O(n^2)

function insertionSort(arr){

    for(let right=1;right<arr.length;right++){

        let curr = right

        while(curr >=1 && arr[curr-1]>arr[curr]){
             [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
             curr--
        }
    }
    return arr
}
// const arr = [9,8,7,6,5,4,3,2,1]
// insertionSort(arr)
// console.log(arr)
console.log(insertionSort([9,8,7,6,5,4,3,2,1]))