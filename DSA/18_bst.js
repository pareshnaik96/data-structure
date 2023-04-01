
class Node{
    constructor(data,left,right){
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insertRecursively(root,data){
        if(!root){
           const node = new Node(data)
           return node
        }
        // incomming value is greater then current node
        if(root.data<data){
            root.right = this.insertRecursively(root.right,data)
        }else{
            root.left = this.insertRecursively(root.left,data)
        }
        return root
    }
    insert(data){
        this.root = this.insertRecursively(this.root,data)
    }
    inorder(root){

        if(root){
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
     search(root,data){
        if(!root){ 
            return null
        }
        if(root.data>data){
            return this.search(root.left,data)
        }else if(root.data<data){
            return this.search(root.right,data)
        }
        return root
    }
    findMax(root){
        if(!root){
            return null
        }
        if(root.right === null){
            return root
        }
        return this.findMax(root.right)
    }
    findMin(root){
        if(!root){
            return null
        }
        if(root.left === null){
            return root
        }
        return this.findMin(root.left)
    }
    delete(root,data){
        if(!root){
            return null
        }
        if(root.data>data){ 
            root.left = this.delete(root.left,data)
        }else if(root.data<data){
            root.right = this.delete(root.right,data)
        }
        //we find the node that we we want to delete
        //if leaf node
        else{
          if(root.left === null && root.right === null){
            return null
          }else if(root.left && root.right){
            let maxNode = this.findMax(root.left)
            root.data = maxNode.data
            root.left = this.delete(root.left,root.data)
          }else{
            let curr = root
            if(root.left === null){
                root = root.right
            }
            if(root.right === null){
                root = root.left
            }
            curr.left = null
            curr.right = null
          }
          return root
        }
    }
    isBst(root){
        if(!root){
            return true
        }
        if(root.left !==null && this.findMax(root.left)>root.data){
            return false
        }
        if(root.right !==null && this.findMin(root.right)<root.data){
            return false
        }
        return this.isBst(root.left) && this.isBst(root.right)
    }
}

const bst = new BST()
const arr = '6 4 10 3 1 5 7 12 9 8'.split(' ').map(val=>+val)

for(let val of arr)
  bst.insert(val)

// console.log(bst.root)
bst.inorder(bst.root)

console.log(bst.search(bst.root,12))


