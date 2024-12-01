export default function Emergency() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Information</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
        <ul className="list-disc pl-5">
          <li>Police: 911</li>
          <li>Fire Department: 911</li>
          <li>Ambulance: 911</li>
          <li>Disaster Management: 1-800-123-4567</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Live Updates</h2>
        <p>Placeholder for live news feed or emergency updates</p>
      </section>
    </div>
  )
}

