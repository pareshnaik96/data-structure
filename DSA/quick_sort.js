//Quick sort (Divide and conqure technique)
//1 2 3 4 5 6  Ascending order
//Pivot :- we choose an element from an array

//=> Random
//=> mid of the array
//=> last element of array as a pivot
//=> first element of array as a pivot

//Recursion steps :-
//If we have a single element or no element in an array to be sorted return (already sorted)
//Pick an element to serve as a pivot(usually left most element as a pivot)
//split an array into two parts - elements on the left side of pivot have less value as compare to pivot 
//all element on left side of pivot have less value as compare to pivot
//all element on right side of pivot have greater value as compare to pivot
//recursively repeat the algorithm

function getCorrectPositionOfPivot(arr,left,right){
    //taking right most element as a pivot
    let pivot = arr[right];
    let currentPositionForPivotSoFar = left-1

    // why right-1 why not till right because right most element is pivot
    for(let curr = left; curr <= right-1; curr++){
        if(pivot > arr[curr]){
            currentPositionForPivotSoFar++
            [arr[currentPositionForPivotSoFar],arr[curr]] = [arr[curr],arr[currentPositionForPivotSoFar]]
        }
    }
    //till the currentPositionForPivotSoFar pivot value is greater because we increment currentPositionForPivotSoFar only when we found lesser value
    [arr[currentPositionForPivotSoFar+1],arr[right]] = [arr[right],arr[currentPositionForPivotSoFar+1]]
    return currentPositionForPivotSoFar+1
}

// function getCurrentPositionOfPivot2(arr,low,high){

//     let left = low
//     let right = high
//     let pivot = arr[high]

//     while(left<right){
//         while(left<right && arr[left]<pivot){
//             left++;
//         }
//         while(left<right && arr[right]>=pivot){
//             right--;
//             [arr[left],arr[right]]=[arr[right],arr[left]]
//         }
//     }
//     [arr[left],arr[high]]=[arr[high],arr[left]]
//     return left
// }



function quickSort(arr,left,right){
    //if single element present
    if(left >= right){  
        return 
    }
    let currPositionOfPivot = getCorrectPositionOfPivot(arr,left,right)
    
    //left side of pivot
    quickSort(arr,left,currPositionOfPivot-1)
    
    //right side of pivot
    quickSort(arr,currPositionOfPivot+1,right)
}

const arr = [6,3,4,6,1,7,3,9,2,8]
quickSort(arr,0,arr.length-1)
console.log(arr)

