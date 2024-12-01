import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Reuniting Families in Times of Crisis
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              FindUnite is dedicated to helping people locate their loved ones during and after disasters. Our platform provides tools for searching, reporting, and accessing vital resources.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/search"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Search for Missing
              </Link>
              <Link
                href="/report"
                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Report Missing
              </Link>
            </div>
          </div>
        </div>
        
        {/* Interesting element: Live counter */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <div className="flex justify-center space-x-8">
            <div>
              <p className="text-4xl font-bold text-blue-600">1,234</p>
              <p className="text-gray-600">People Reunited</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">56</p>
              <p className="text-gray-600">Active Disasters</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">789</p>
              <p className="text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>

        {/* Interesting element: Featured success story */}
        <div className="mt-20 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Featured Success Story</h2>
          <div className="flex items-center space-x-8">
            <Image
              src="/success-story.jpg"
              alt="Reunited family"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">The Johnson Family Reunion</h3>
              <p className="text-gray-600">After being separated for 3 weeks due to a severe hurricane, the Johnson family was finally reunited thanks to FindUnite's platform and the efforts of our dedicated volunteers.</p>
              <Link href="/success-stories" className="text-blue-600 hover:underline mt-2 inline-block">Read more success stories</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

