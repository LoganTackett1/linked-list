class Node {
    constructor () {
        this.value = null,
        this.nextNode = null
    }
}

class LinkedList {
    constructor () {
        this.head = null,
        this.length = 0
    }
    append (value) {
        const newNode = new Node();
        newNode.value = value;
        let temp = this.head;
        if (temp === null) {
            this.head = newNode;
        } else {
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = newNode;
        }
        this.length += 1;
    }
    prepend (value) {
        const newNode = new Node();
        newNode.value = value;
        newNode.nextNode = this.head;
        this.head = newNode;
        this.length += 1;
    }
}

const myList = new LinkedList();
myList.prepend("dog");
myList.prepend("cat");
myList.append("lion");
console.log(myList);
const myList2 = new LinkedList();
myList2.append("dog");
myList2.append("cat");
myList2.prepend("lion");
console.log(myList2);
