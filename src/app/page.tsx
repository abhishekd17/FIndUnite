import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to FindUnite</h1>
      <p className="text-xl mb-8">Helping reunite individuals separated during disasters</p>
      <div className="flex space-x-4">
        <Link href="/search" className="bg-blue-500 text-white px-4 py-2 rounded">Search for Missing</Link>
        <Link href="/report" className="bg-gray-500 text-white px-4 py-2 rounded">Report Missing</Link>
      </div>
    </div>
  )
}

