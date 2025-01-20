import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
        // Reload only if the current page is a "projects" page
        if (url.startsWith("/projects")) {
            window.location.reload(); // Reload the current page after navigation
        }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
}, [router]);


  return <Component {...pageProps} />;
}
