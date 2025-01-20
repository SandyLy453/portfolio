import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
        // Reload only when navigating INTO a "/projects" route
        if (url.startsWith("/projects") && !router.pathname.startsWith("/projects")) {
            window.location.href = url; // Force a full page reload
        }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
        router.events.off("routeChangeStart", handleRouteChange);
    };
}, [router]);


  return <Component {...pageProps} />;
}
