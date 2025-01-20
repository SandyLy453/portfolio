import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

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


  return <Component {...pageProps} />;
}
