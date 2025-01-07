import Stack from "@/implementations/greatfrontend/array-based";

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push(1));
console.log(myStack.peek());

export default function Home() {
    return (
        <div>
            <h1>Stacks</h1>
        </div>
    );
}
