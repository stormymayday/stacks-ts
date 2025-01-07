export default class Stack<T> {
    stackList: Array<T>;
    constructor() {
        this.stackList = [];
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

    isEmpty(): boolean {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }
}
