import Stack from "@/implementations/scott-barret/linked-list-based";

const myStack = new Stack(0);
console.log(myStack);
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
