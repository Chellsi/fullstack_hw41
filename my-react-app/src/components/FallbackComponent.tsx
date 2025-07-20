interface FallbackComponentProps {
    error: Error
}

const FallbackComponent = ({error}: FallbackComponentProps) => {
    return (
        <div className="bg-red-500 text-white p-6 rounded-md shadow-lg flex flex-col items-center justify-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">Error</h1>
            <p className="text-lg text-center">{error.message}</p>
        </div>
    )
}

export default FallbackComponent