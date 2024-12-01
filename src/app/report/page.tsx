export default function Report() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Report a Missing Person</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name of Missing Person</label>
          <input type="text" id="name" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="age" className="block mb-2">Age</label>
          <input type="number" id="age" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="lastSeen" className="block mb-2">Last Seen Location</label>
          <input type="text" id="lastSeen" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea id="description" className="w-full p-2 border rounded" rows={4} required></textarea>
        </div>
        <div>
          <label htmlFor="photo" className="block mb-2">Upload Photo (if available)</label>
          <input type="file" id="photo" accept="image/*" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Report</button>
      </form>
    </div>
  )
}

