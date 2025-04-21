 
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome to Social Polling App!</h1>
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-500 text-white p-2 rounded">Login</Link>
        <Link href="/signup" className="bg-green-500 text-white p-2 rounded">Sign Up</Link>
      </div>
    </main>
  )
}
