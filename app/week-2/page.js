import Heading from "./heading.js";
import Link from "next/link";

export default function Page() {
    let a = 3;
    let b = 5;

    return (
    <main>
      <Heading/> 
      <p>This is Heading inside a paragraph is {<Heading />}</p>
      <p>Demos for Web Dev 2</p>
      <p>The sum of a + b is {a+b}</p>
      <p>go back to <Link href = "/">the home page </Link></p>
    </main>
    );
}