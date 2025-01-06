export default class Stack {
    stackList: number[];
    constructor() {
        this.stackList = [];
    }

    push(value: number) {
        this.stackList.push(value);
    }
}
