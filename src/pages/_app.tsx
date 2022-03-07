import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { useLanyardWs } from 'use-lanyard';
import { createContext } from 'react';

const DISCORD_ID = '218972931701735424' // Voltages#0016

export const AppContext = createContext<ReturnType<typeof useLanyardWs> | null>(null);

function MyApp({ Component, pageProps }: AppProps) {

  const lanyard = useLanyardWs(DISCORD_ID);
  
  return (
    <AppContext.Provider value={lanyard}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
