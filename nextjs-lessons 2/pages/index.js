import Link from "next/link";
// (i) file based routing
// routing in react is really hard and tedious therefore in
// next js it solves the complexity
//(ii) pre rendering in nectjs
// it creates static html webpage in advance
// therefore better production and search engine optiimizstion
// (iii) API routes
// apis with nextjs fronend code can be created in react app
// and can be called in react
// (iv)  support css modules which are out of the box
// (v) Authentication: supports multiple authentication patterns
// (vi) dev and product build system: optimized production
// focuses more on the code
export default function IndexPage() {
  return (
    <div>
      Hello World!.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
