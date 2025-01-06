export default class Stack {
    stackList: number[];
    constructor() {
        this.stackList = [];
    }

    isEmpty(): boolean {
        return this.stackList.length === 0;
    }

    push(value: number) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList.pop();
        }
    }
}
