import Stack from "@/implementations/greatfrontend/array-based";

const myStack = new Stack();
console.log(myStack.length());
console.log(myStack.push(10));
console.log(myStack.length());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.length());

export default function Home() {
    return (
        <div>
            <h1>Stacks</h1>
        </div>
    );
}
