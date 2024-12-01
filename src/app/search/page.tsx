export default function Search() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search for Missing Persons</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2">Last Known Location</label>
          <input type="text" id="location" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="photo" className="block mb-2">Upload Photo</label>
          <input type="file" id="photo" accept="image/*" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </form>
    </div>
  )
}

