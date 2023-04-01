// Queue is a linear data structure FIFO(first in first out)
// example :-
// ticket booking
// sliding window
// graph BFS(breath first search)
// tree inorder traversal
// priority queue
// event Queue

// linkedList based implementation

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    appendElement(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeElement() {
        if (this.size === 0) {
            throw Error("Queue is empty")
        }
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--

        return curr.data
    }
}
class Queue {
    constructor() {
        this.list = new LinkedList()
    }
    enQueue(data) {
        // adding element in a queue
        this.list.appendElement(data)
    }
    deQueue() {
        // remove element in a queue
        return this.list.removeElement()
    }
    get getsize() {
        return this.list.size
    }
    frontElement() {
        return this.list.head.data
    }
    isEmpty() {
        return this.list.size === 0
    }
}

const que = new Queue()
que.enQueue(20)
que.enQueue(30)
que.enQueue(40)
que.enQueue(50)

// while (!que.isEmpty()) {
//     console.log(que.getsize, "======", que.deQueue())
// }
// console.log(que.getsize)

//implementation of stack using queue

class stackUsingQueue{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
        this.size = 0
    }
    push(data){
        if(this.q1.isEmpty()){
            this.q2.enQueue(data)
        }else{
            this.q1.enQueue(data)
        }
        this.size++
    }
    pop(){
        this.size = Math.max(0,this.size-1)
        if(this.q1.isEmpty()){
            while(this.q2.getsize !==1){
                this.q1.enQueue(this.q2.deQueue())
            }
            return this.q2.deQueue()
        }else{
            while(this.q1.getsize !==1){
                this.q2.enQueue(this.q1.deQueue())
            }
            return this.q1.deQueue()
        }
    }
    isEmpty(){
        return this.size === 0
    }
    get getsize(){
        return this.size
    }
}

const st = new stackUsingQueue()
// st.push(10)
// st.push(20)
// st.push(30)
// st.push(40)

// while(!st.isEmpty()){
//     console.log(st.getsize,"======",st.pop())
// }
// console.log(st.getsize)

module.exports = Queue