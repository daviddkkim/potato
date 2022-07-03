import type { AppProps } from "next/app";
import { grassTheme, globalCss, darkTheme } from "@pear-ui/core";
import { useState, useEffect, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ThemeProvider } from "next-themes";

const globalStyles = globalCss({
  html: {
    overflow: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$mauve1",
  },

  "body, button": {
    fontFamily: "$mono",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violet5",
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    );
  }
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{
        grass: grassTheme.className,
      }}
      defaultTheme="grass"
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
export default MyApp;
