
function isBalance(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i]);
        }

        if (str[i] === "}") {
            if (stack[stack.length - 1] === "{") {
                stack.pop();
            }
            else {
                return false;
            }
        }

        if (str[i] === "]") {
            if (stack[stack.length - 1] === "[") {
                 stack.pop();
                 }
            else {
                return false;
            }
        }

        if (str[i] === ")") {
            if (stack[stack.length - 1] === "(") {
                 stack.pop();
                 }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let s = isBalance("([][])")
console.log(s);





class Node {
    constructor(data) {
        this.value = data,
            this.next = null
    }
}

class stack {
    constructor() {
        this.top = null
        this.length = 0

    }

    append(data) {
        const newNode = new Node(data)
        if (this.length == 0) {
            this.top = newNode
        } else {
            let hold = this.top
            this.top = newNode
            newNode.next = hold
        }
        this.length++
    }
    display() {
        console.log(this.top)
    }
    remove() {
        const newTop = this.top.next
        this.top = newTop
        this.length--
    }
   
}

const mystack = new stack()
mystack.append(1)
mystack.append(2)
mystack.append(3)
mystack.remove()
mystack.display()