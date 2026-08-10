import Head from "next/head";
import ComingSoon from "../component/coming-soon";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - TOTC</title>
      </Head>
      <ComingSoon pageName="Blog" />
    </>
  );
}