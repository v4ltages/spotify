import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { useLanyardWS } from 'use-lanyard';
import { createContext } from 'react';

const DISCORD_ID = '218972931701735424' // Voltages#0016

export const AppContext = createContext<ReturnType<typeof useLanyardWS> | null>(null);

function MyApp({ Component, pageProps }: AppProps) {

  const lanyard = useLanyardWS(DISCORD_ID);
  
  return (
    <AppContext.Provider value={lanyard}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
