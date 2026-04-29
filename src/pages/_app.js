import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeliveryBanner from '../components/DeliveryBanner';

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => { window.scrollTo(0, 0); }, [router.pathname]);
  return null;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="aRCVs6Uz3vcDTacP2AQrWWjkuoEgB2ZmVz-wm-lOzz4" />
        <meta name="p:domain_verify" content="1dff310591a9761029d1c8201dcd43e3"/>
      </Head>
      <ScrollToTop />
      <DeliveryBanner />
      <Navbar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}