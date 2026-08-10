import Head from "next/head";
import AuthForm from "../component/auth-form";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up - TOTC</title>
      </Head>
      <AuthForm mode="signup" />
    </>
  );
}