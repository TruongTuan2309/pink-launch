import AppRoute from '@/routes/AppRoute'
import { Web3ReactProvider } from '@web3-react/core'
import { connectors } from '@/utils/connectors'

const App = () => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <AppRoute />
    </Web3ReactProvider>
  )
}

export default App
