import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
