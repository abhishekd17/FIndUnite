import Button from './Button'

const SearchForm = () => {
  return (
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
      <Button type="submit">Search</Button>
    </form>
  )
}

export default SearchForm

