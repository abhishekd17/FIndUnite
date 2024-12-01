'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Search() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new File
Reader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search for Missing Persons</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2 font-medium">Last Known Location</label>
          <input type="text" id="location" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="photo" className="block mb-2 font-medium">Upload Photo</label>
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
      </form>
    </div>
  )
}

