import '../styles/globals.css'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (<Component >
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    </Head>
    {pageProps}
  </Component>);
}

export default MyApp
