// stack :-
// stack is a linear datastructure insert at the end and removal of element from the (LIFO) last in fast out .

// application :-
// bracket balancing
// function call

// implementation :-
// push() insert
// pop()  removal

function isBalance(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i]);
        }

        if (str[i] === "}") {
            if (stack[stack.length - 1] === "{") {
                stack.pop();
            }else {
                return false;
            }
        }

        if (str[i] === "]") {
            if (stack[stack.length - 1] === "[") {
                 stack.pop();
            }else {
                return false;
            }
        }

        if (str[i] === ")") {
            if (stack[stack.length - 1] === "(") {
                 stack.pop();
            }else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let s = isBalance("([][])")
console.log(s);

//time complexity
//worstcase -O(n)


//Implement stack using LinkedList

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }  
}
class  LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    pushBack(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node
        if(this.size === 0 ){
            this.tail = node
        }
        this.size ++
    }
    popBack(){
        if(!this.size){
            throw Error("stack is empty")
        }

        let curr = this.head
        this.head = this.head.next
        this.size --
        curr.next = null
        return curr.data
    }
}
class Stack{
    constructor(){
        this.list = new LinkedList()
    }
    push(val){
        this.list.pushBack(val)
    }
    pop(){
        return this.list.popBack()
    }
    get top(){
        return this.list.head
    }
    get getsize(){
        return this.list.size
    }
    isEmpty(){
        return this.list.size === 0
    }
}

const st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)

while(!st.isEmpty()){
    console.log(st.getsize,"=======",st.pop())
}
console.log(st.getsize)



