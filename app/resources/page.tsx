export default function Resources() {
  const resources = [
    { title: 'Emergency Shelters', content: 'Find nearby emergency shelters and safe zones.' },
    { title: 'First Aid Guide', content: 'Learn basic first aid techniques for emergencies.' },
    { title: 'Disaster Preparedness', content: 'Tips and checklists for preparing for various disasters.' },
    { title: 'Mental Health Support', content: 'Resources for coping with stress and trauma during and after disasters.' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disaster Recovery Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
            <p>{resource.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

