import './App.css'
import { MessageComponent } from './components/MessageComponent'
import { fetchMessage } from './components/FetchMessage'
import AppErrorBoundary from './components/ErrorBoundary'
import { Suspense } from 'react'

export default function App() {
  const messagePromise = fetchMessage()

  return (
    <AppErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MessageComponent messagePromise ={messagePromise} />
      </Suspense>
    </AppErrorBoundary>
  )
}


