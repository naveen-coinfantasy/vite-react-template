import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Suspense } from 'react'
import './app.css'
import MetaMaskProvider from '@/providers/MetamaskProvider'
export default function App() {
  return (
    <BrowserRouter>
      <MetaMaskProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </MetaMaskProvider>
    </BrowserRouter>
  )
}
