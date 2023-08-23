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
    get tail () {
        let temp = this.headNode;
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }
        return temp;
    }
    set tail (param) {
        throw new Error("Cannot set tail of linked list directly, use append method");
    }
    at (index) {
        let temp = this.headNode;
        for (let i = 0; i < index; i++) {
            temp = temp.nextNode;
        }
        return temp;
    }
    pop () {
        if (this.length === 0) {
            throw new Error("No elements in list to pop");
        } else if (this.length === 1) {
            this.length -= 1;
            this.headNode = null;
        } else {
            this.length -= 1;
            let temp = this.headNode;
            let prev = null;
            while (temp.nextNode != null) {
                prev = temp;
                temp = temp.nextNode;
            }
            prev.nextNode = null;
        }
    }
    find (value) {
        let temp = this.headNode;
        let count = 0;
        while (temp !== null) {
            if (temp.value == value) {
                return count;
            } else {
                temp = temp.nextNode;
                count += 1;
            }
        }
        return false;
    }
    contains (value) {
        if (this.finds(value) !== false) {
            return true;
        }
        return false;
    }
    toString () {
        let temp = this.headNode;
        let result = "";
        while (temp.nextNode !== null) {
            result += `( ${temp.value} ) - > `;
            temp = temp.nextNode;
        }
        result += `( ${temp.value} )`;
        return result;
    }
    insertAt (value, index) {
        if (typeof index != "number") {
            throw new Error("Index of list needs to be a number");
        } else if (index < 0 || index > this.length) {
            throw new Error("Index out of range");
        } else if (index === this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            this.length += 1;
            let after = this.headNode;
            let before = null;
            for (let i = 0; i < index; i++) {
                before = after;
                after = after.nextNode;
            }
            const temp = new Node();
            temp.value = value;
            temp.nextNode = after;
            before.nextNode = temp;
        }

    }
    removeAt (index) {
        if (typeof index != "number") {
            throw new Error("Index of list needs to be a number");
        } else if (this.length === 0) {
            throw new Error("No elements to remove");
        } else if (index < 0 || index >= this.length) {
            throw new Error("Index out of range");
        } else if (index === this.length - 1) {
            this.pop();
        } else if (index === 0) {
            const temp = this.headNode;
            const after = this.headNode.nextNode;
            temp.nextNode = null;
            this.headNode = after;
            this.length -= 1;
        } else {
            let temp = this.headNode;
            let before = null;
            for (let i = 0; i < index; i++) {
                before = temp;
                temp = temp.nextNode;
            }
            const after = temp.nextNode;
            temp.nextNode = null;
            before.nextNode = after;
        }
    }
}

export default LinkedList;

