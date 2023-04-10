import Head from "next/head";
import "@/styles/index.css";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Carlos Amorós - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="Carlos Amorós - Full stack developer"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
