interface CardProps {
  title: string
  content: string
  imageUrl?: string
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card

