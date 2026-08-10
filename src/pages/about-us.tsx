import Head from "next/head";
import ComingSoon from "../component/coming-soon";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - TOTC</title>
      </Head>
      <ComingSoon pageName="About Us" />
    </>
  );
}