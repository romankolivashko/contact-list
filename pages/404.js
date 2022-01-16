import Link from "next/link";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Oh this is embarassing.</h1>
      <h2>That page does not exist.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
   );
}
 
export default NotFound;