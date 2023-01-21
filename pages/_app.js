import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
  <Layout>
      <Head>
          <title>Blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
        </Head> 
    <Component {...pageProps} />
  </Layout>
  )
}

const EmptyLayout = ({children})=><>{children}</>

export default MyApp
