function fact(n){
    if( n ==1 ) return 1
    return n*fact(n-1)
}
console.log(fact(6))

function pow(b,exp){
    if(exp ==0) return 1
    return b*pow(b,exp-1)
}
console.log(pow(2,5))




function reverse(str){
    str=str.split("").reverse().join("")
    return str
}

function solution(str,n){
    let arr = str.split(" ")
    for(let i=0; i<arr.length; i++){
        arr[i]=reverse(arr[i])
    }
    for(let i=0; i<arr.length; i+=n){
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
    }
    return arr.join(" ")
}
console.log(solution("aA bB cC dD",2))