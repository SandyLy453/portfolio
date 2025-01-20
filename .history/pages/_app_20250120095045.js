import { useEffect } from "react";
import { useRouter } from "next/router";
import { Playfair_Display } from '@next/font/google';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const playfairDisplay = Playfair_Display({
    weight: ['400', '600', '900'],
    style: ['normal', 'bold', 'italic'],
    subsets: ['latin'],
  });

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


  return <Component {...pageProps} />;
}
