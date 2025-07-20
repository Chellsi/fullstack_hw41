import './App.css'
import { MessageComponent } from './components/MessageComponent'
import { fetchMessage } from './components/FetchMessage'
import AppErrorBoundary from './components/ErrorBoundary'
import { Suspense } from 'react'

export default function App() {
  const messagePromise = fetchMessage()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <AppErrorBoundary>
        <Suspense fallback={<div className="text-lg text-gray-600 animate-pulse">Loading...</div>}>
          <MessageComponent messagePromise={messagePromise} />
        </Suspense>
      </AppErrorBoundary>
    </div>
  )
}


