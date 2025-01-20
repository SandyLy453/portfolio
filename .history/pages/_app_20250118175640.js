import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.location.href = url; /
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);


  return <Component {...pageProps} />;
}
