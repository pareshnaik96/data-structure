//quicksort

let items = [5,3,7,6,2,9]

function quicksort(items, left, right){
    let index;

    if (items.length > 1){
        index = partition(items, left, right)
    }
    //more  elements on left side
    if (left < index -1){
        quicksort(items, left, index -1)
    }

    // right side elements
    if (index < right){
        quickSort(items, index, right);
    }
    return items
}

function partition(items, left, right){
    let pivot = items[Math.floor((right + left) / 2)]
    console.log('pivot====', pivot)
    i = left,
    console.log('left====', pivot)
    j = right,
    console.log('right====', pivot)

    while(i<=j){
        //increment left pointer
        console.log('items====', items[i], pivot)
        while (items[i] < pivot){
            console.log('coming here in first inner loop')
            i++;
        }

        // decrement right pointer
        while(items[j] > pivot){
            console.log('coming here in second inner loop')
            j--;
        }

        // swaping
        if (i<=j){
            [items[i], items[j]] = [items[j], items[i]]
            
            i++;
            j--;
        }
    }
    return i;//left pointer
}


//find the subsequence

function subseq(input,output){
    //base case
    if(input.length == 0){
        console.log(output)
        return
    }
    //considering the element
    sub(input.substring(1),output+input[0])
    //not considering the element
    sub(input.substring(1),output)
}
output = ""
input = "abc"