'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Report() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Report a Missing Person</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name of Missing Person</label>
          <input type="text" id="name" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="age" className="block mb-2 font-medium">Age</label>
          <input type="number" id="age" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="lastSeen" className="block mb-2 font-medium">Last Seen Location</label>
          <input type="text" id="lastSeen" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 font-medium">Description</label>
          <textarea id="description" className="w-full p-2 border rounded" rows={4} required></textarea>
        </div>
        <div>
          <label htmlFor="photo" className="block mb-2 font-medium">Upload Photo (if available)</label>
          <input 
            type="file" 
            id="photo" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
        </div>
        {imagePreview && (
          <div className="mt-4">
            <Image src={imagePreview} alt="Preview" width={200} height={200} className="rounded" />
          </div>
        )}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Report</button>
      </form>
    </div>
  )
}

