import React from "react";
import { AppProps } from "next/app";

import "@styles/app.global.scss";
import { useRouter } from "next/router";

import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import ThemeProvider from "src/context/ThemeProvider";
import { jsx } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();

    const queryClient = new QueryClient();
    const router = useRouter();

    return (
        <ApolloProvider client={apolloClient}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Provider store={store}>
                        <ThemeProvider>
                            <Component {...pageProps} key={router.asPath} />
                        </ThemeProvider>
                    </Provider>
                </Hydrate>
            </QueryClientProvider>
        </ApolloProvider>
    );
}

export default MyApp;
