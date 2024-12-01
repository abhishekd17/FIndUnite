import Button from '../components/Button'

export default function Contact() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" rows={4} required></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}

