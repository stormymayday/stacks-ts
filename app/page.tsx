import Stack from "@/implementations/greatfrontend/array-based";

const myStack = new Stack();
// console.log(myStack);
console.log(myStack.push(0));
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.isEmpty());

export default function Home() {
    return (
        <div>
            <h1>Stacks</h1>
        </div>
    );
}
