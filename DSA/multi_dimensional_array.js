//1.You are given an m x n integer grid accounts where accounts [i][j] is the number of money the ith customer has in the jth bank.
//Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is
//the customer that has the maximum wealth.

//Input acount = [[1,2,3,],[3,2,1]]
//output : 6
//explanation :
//1st customer has wealth = 1+2+3=6
//2st customer has wealth = 3+2+1=6
//both customers are considered the richest with a wealth of 6 each so return 6

// Input : accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output : 17

function calculateTotalSum(banks){
    
    let totalAmount = 0;
    
    for(let balance of banks){
       totalAmount +=balance
    }
    return totalAmount;
}

function calculateRichestPerson(accounts){

    let maxAmount = -Infinity

    for(let customer of accounts){
        maxAmount = Math.max(calculateTotalSum(customer),maxAmount)
    }
    return maxAmount
}
// console.log(calculateRichestPerson([[2,8,7],[7,1,3],[1,9,5]]))

//2.There  is an array of animals.The animals can be repeated.Give me the data that how many time the animal is repeated.

function animalCount(animals){

    let animalFreq = {}

    for(let animal of animals){
       if(animalFreq[animal]){
         animalFreq[animal] +=1
       }else{
         animalFreq[animal] =1
       }
    }
    console.log(animalFreq)
}
// animalCount(["cat","dog","goat","lion","cat","dog","goat","goat","dog","cat","cat","cat","dog"])

//3.convert an array of number to array of string in such a way that if number was 1,2,3,4 then strings would have values like
//1:a in 2:ab in 3:abc  e.g. [2,5]=>["ab","abcde"]

function generateString(number){

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let finalStr ='', currIndex = 0;

    while(currIndex < number){
        finalStr +=alphabet[ currIndex % 26 ];
        currIndex++
    }
    return finalStr;   
}
// console.log(generateString(4))
function encodeNumberWithCharacter(arr){

    for(let i=0;i<arr.length;i++){
        arr[i]=generateString(arr[i]);
    }
}
const temp = [2,5,3,4,5,6]
encodeNumberWithCharacter(temp)
console.log(temp)


function encodeNumberWithCharacterOptimally(arr){
    
    let maxNumber = Math.max(...arr)
    let encodeArray = ['']
    for(let i=1;i<=maxNumber;i++){
        encodeArray.push(generateString(i))
    }

    for(let i=0;i<arr.length;i++){
        arr[i]=generateString(arr[i])
    }
}

const temp1 = [2,5,3,4,5,6]
encodeNumberWithCharacterOptimally(temp1)
console.log(temp1)

