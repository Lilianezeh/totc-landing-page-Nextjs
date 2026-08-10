import Head from "next/head";
import AuthForm from "../component/auth-form";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - TOTC</title>
      </Head>
      <AuthForm mode="login" />
    </>
  );
}