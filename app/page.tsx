import Stack from "@/implementations/scott-barret/linked-list-based";

const myStack = new Stack(0);
console.log(myStack);
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
