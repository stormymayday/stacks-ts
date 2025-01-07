export default class Stack<T> {
    stackList: Array<T>;
    constructor() {
        this.stackList = [];
    }

    isEmpty(): boolean {
        return this.stackList.length === 0;
    }

    push(value: T) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList.pop();
        }
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }
}
