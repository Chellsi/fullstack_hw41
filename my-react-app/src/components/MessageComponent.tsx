import { use } from 'react'

export const MessageComponent = ({messagePromise}: {messagePromise: Promise<string>}) => {
    const message = use(messagePromise)

    return <p>{message as string}</p>
}