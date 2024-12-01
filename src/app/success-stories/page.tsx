import Card from '../components/Card'

export default function SuccessStories() {
  const stories = [
    {
      title: "Reunited After the Storm",
      content: "John and Mary were separated during a hurricane but found each other through FindUnite after 3 days.",
      imageUrl: "/assets/images/success-story-1.jpg"
    },
    {
      title: "A Family Whole Again",
      content: "The Smith family was reunited after being displaced by wildfires, thanks to our platform.",
      imageUrl: "/assets/images/success-story-2.jpg"
    },
    {
      title: "Hope in the Aftermath",
      content: "Two friends lost contact during an earthquake but reconnected through our service within 24 hours.",
      imageUrl: "/assets/images/success-story-3.jpg"
    }
  ]

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <Card key={index} title={story.title} content={story.content} imageUrl={story.imageUrl} />
        ))}
      </div>
    </div>
  )
}

