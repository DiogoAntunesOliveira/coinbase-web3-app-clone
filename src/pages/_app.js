import '@/styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const supportedChainIds = [5]
const connectors = {
  injected: {},
}

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}>

      <Component {...pageProps} />

    </ThirdwebWeb3Provider>
  )


}
