export default function FAQ() {
  const faqs = [
    {
      question: "How does FindUnite work?",
      answer: "FindUnite provides a platform for reporting missing persons and searching for individuals separated during disasters. Users can submit reports, search the database, and access emergency resources."
    },
    {
      question: "Is the service free?",
      answer: "Yes, FindUnite is a free service. Our mission is to help as many people as possible during times of crisis."
    },
    {
      question: "How can I report a missing person?",
      answer: "You can report a missing person by navigating to our 'Report' page and filling out the form with as much detail as possible."
    },
    {
      question: "How long does it take for a report to be visible in the search results?",
      answer: "Reports are typically processed and made visible within 24 hours. In emergency situations, we strive to expedite this process."
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

