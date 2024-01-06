import { useEffect } from 'react'

export const PageError = ({
    error,
}: {
    error: Error & { digest?: string }
}) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>{error.message}</h2>
        </div>
    )
}