import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackComponent from './FallbackComponent'


interface AppErrorBoundaryProps {
    children: ReactNode
}

const AppErrorBoundary = ({children}: AppErrorBoundaryProps) => {
    return (
        <ErrorBoundary FallbackComponent={FallbackComponent}>
            {children}
        </ErrorBoundary>
    )
}

export default AppErrorBoundary