// This file will be no longer used after implementing Dynamic Routes with [id].js
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

// Server Side Rendering
// Will default to SSR even without below
export async function getServerSideProps(context) {
  console.log('context', context.query);
  return {
    props: {
      // props for your component
    },
  };
}

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}