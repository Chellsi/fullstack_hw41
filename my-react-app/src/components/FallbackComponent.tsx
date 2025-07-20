interface FallbackComponentProps {
    error: Error
}

const FallbackComponent = ({error}: FallbackComponentProps) => {
    return (
        <div className="bg-red-500 text-white p-4 rounded-md">
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    )
}

export default FallbackComponent