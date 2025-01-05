class Node {
    value: number;
    next: Node | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack {
    top: Node | null;
    length: number;
    constructor(value: number) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value: number): Stack {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
}
