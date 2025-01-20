import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
        // Reload only for pages inside the "projects" folder
        if (url.startsWith("/projects")) {
            window.location.href = url; // Force a full reload for projects pages
        }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
        router.events.off("routeChangeStart", handleRouteChange);
    };
}, [router]);


  return <Component {...pageProps} />;
}
