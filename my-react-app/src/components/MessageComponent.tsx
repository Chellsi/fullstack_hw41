import { use } from 'react'

export const MessageComponent = ({messagePromise}: {messagePromise: Promise<string>}) => {
    const message = use(messagePromise)

    return (
        <div className='items-center justify-center'>
            <p className="text-xl text-center text-blue-900 bg-white/80 rounded-lg shadow px-6 py-4 max-w-md mx-auto">{message as string}</p>
        </div>
    )
}