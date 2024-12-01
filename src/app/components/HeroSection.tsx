import Button from './Button'

const HeroSection = () => {
  return (
    <div className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FindUnite</h1>
        <p className="text-xl mb-8">Helping reunite individuals separated during disasters</p>
        <div className="space-x-4">
          <Button>Search for Missing</Button>
          <Button variant="secondary">Report Missing</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

