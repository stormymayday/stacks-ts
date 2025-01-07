import Stack from "@/implementations/greatfrontend/array-based";

const myStack = new Stack();
// console.log(myStack);
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

export default function Home() {
    return (
        <div>
            <h1>Stacks</h1>
        </div>
    );
}
