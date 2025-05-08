import Link from "next/link";


export default function Home() {
  return (
    <main>
        <h1>
        <Link href="/addproduct">add Product</Link>
        <br/>
        <Link href="/productlist">add Product List</Link>
        <br/>
        <Link href="/productlist/editproduct">EDIT Product List</Link>
        </h1>
    </main>
  );
}
