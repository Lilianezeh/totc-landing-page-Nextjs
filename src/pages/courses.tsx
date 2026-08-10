import Head from "next/head";
import ComingSoon from "../component/coming-soon";

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses - TOTC</title>
      </Head>
      <ComingSoon pageName="Courses" />
    </>
  );
}