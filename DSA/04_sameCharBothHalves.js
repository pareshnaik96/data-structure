function checkSameHalves(str) {
    if( str.length % 2 != 0 ) return "NO"

    let map = {}

    for(let i=0; i<str.length; i++){
        if(i<str.length/2){
            map[str[i]] = map[str[i]]+1 || 1;
        }else{
            if(map[str[i]]){
                map[str[i]]--
               
            }else{
                return "NO"
            }
        } 
    }
    return "Yes"
}

console.log(checkSameHalves('abccabbacc'));


//Find the hidden number.
//Given an array of integers, find another integer such that, if all the element of the 
//array are subtracted individually from the number, then the sum of all the differences should add to 0.
//if any such integer exists, print the value otherwise "-1"
//Approach
//hidden number =x
//[1,3,5,7,9]=> 1-x + 3-x + 5-x + 7-x + 9-x => (1+3+5+7+9) - 5x => x - average of the elements

function avgInteger(arr) {
    let sum =0;
    for(let elem of arr){
        sum+=elem;
    }

    if(parseInt(sum/arr.length) === sum/arr.length ) {
        return sum/arr.length;
    }else{
        return -1;
    }
}

console.log(avgInteger([1,3,5,7,9]));


//Replace each element by difference of array size and freq. of the element.
//!7 [1 2 5 2 2 5 4] => [6 4 5 4 4 5 6]

function replace(arr){
    let map ={};

    for(let el of arr){
        map[el] = map[el] + 1 || 1;
    }
    for(let i=0; i<arr.length; i++){
        arr[i] = arr.length -map[arr[i]];
    }
    return arr;
}

console.log(replace([1, 2, 5, 2, 2, 5, 4]));