class Node {
    constructor () {
        this.value = null,
        this.nextNode = null
    }
}

class LinkedList {
    constructor () {
        this.headNode = null,
        this.length = 0
    }
    append (value) {
        const newNode = new Node();
        newNode.value = value;
        let temp = this.headNode;
        if (temp === null) {
            this.headNode = newNode;
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
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
        this.length += 1;
    }
    get size () {
        return this.length;
    }
    set size (param) {
        throw new Error("Cannot set size of linked list");
    }
    get head () {
        return this["headNode"];
    }
    set head (param) {
        throw new Error("Cannot set head of linked list directly, use prepend method");
    }
}

const myList = new LinkedList();
myList.prepend("dog");
myList.prepend("cat");
myList.append("lion");


