import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';

// Create a custom cache instance
const cache = createCache({ key: 'custom' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Provide the custom cache to the app
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}