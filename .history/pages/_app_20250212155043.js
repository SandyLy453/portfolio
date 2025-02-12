import { useEffect } from "react";
import { useRouter } from "next/router";
import { Playfair_Display, Sen } from 'next/font/google';
import '../styles/globals.css';

const playfairDisplay = Playfair_Display({
  weight: ['400', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const sen = Sen({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
        if (url.startsWith("/projects")) {
            window.location.reload();
        }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
}, [router]);


  return (
    <main className={`${playfairDisplay.className} ${sen.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
