import Link from 'next/link'

export default function GetInvolved() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Get Involved</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
        <p className="mb-4">Join our team of dedicated volunteers and make a difference in people's lives during disasters.</p>
        <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded inline-block">Sign Up to Volunteer</Link>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Donate</h2>
        <p className="mb-4">Your donations help us maintain our services and support those affected by disasters.</p>
        <Link href="#" className="bg-green-500 text-white px-4 py-2 rounded inline-block">Make a Donation</Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Partnerships</h2>
        <p className="mb-4">We're always looking for organizations to partner with in our mission.</p>
        <Link href="#" className="bg-purple-500 text-white px-4 py-2 rounded inline-block">Become a Partner</Link>
      </section>
    </div>
  )
}

