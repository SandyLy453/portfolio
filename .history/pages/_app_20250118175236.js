import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        handleRouteChange();

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);


  return <Component {...pageProps} />;
}
