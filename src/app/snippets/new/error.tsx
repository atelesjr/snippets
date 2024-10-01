'use client'
//Unlike the other special pages, Error.tsx must be client

interface ErrorPageProps {
  error: Error,
  reset: () => void
}


export default function ErrorPage({error}:ErrorPageProps) {
  return <div>{error.message}</div>
}