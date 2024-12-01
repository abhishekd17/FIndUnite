import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FindUnite</Link>
        <ul className="flex space-x-4">
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/report">Report</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/emergency">Emergency</Link></li>
          <li><Link href="/get-involved">Get Involved</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

