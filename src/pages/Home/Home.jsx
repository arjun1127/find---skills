import Hero from './hero'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '../../components/card';


const Home = () => {
  const cardData = [
    
    {
      title: 'Learn From Experts',
      description: 'If you are looking to learn live from experts, you can ping them.',
      imageUrl: '/learn.png',
      link: '/chat', // Route to the Learn From Experts page
    },
    {
      title: 'Teach Here',
      description: 'If you are a teacher or had experience in a particular field please feel free to share your knowledge.',
      imageUrl: 'teach.jpeg',
      link: '/Share', // Route to the Teach Here page
    },
    {
      title: 'Learn Programming',
      description: 'Learn Programming through modules listed and tasks given.',
      imageUrl: 'programming.jpeg',
      link: '/programming', // Route to the Learn Programming page
    },
    {
      title: 'Explore Circuitry',
      description: 'Learn Electronics, Analog, digital or any field through modules listed and tasks given.',
      imageUrl: 'electronics.jpg',
      link: '/Electronics', // Route to the Explore Circuitry page
    },
    {
      title: 'Dive into AI and Machine Learning',
      description: 'Explore Machine Learning models and Algorithms used in the actual world, and more concepts of Gen AI.',
      imageUrl: 'AI_ML.jpeg',
      link: '/programming', // Route to the AI and Machine Learning page
    },
    {
      title: 'Learn Japanese',
      description: 'Learn to speak and talk Japanese and practice basics of Hiragana, Katakana, and Kanji.',
      imageUrl: 'japanesee.jpeg',
      link: '/Japanese', // Route to the Learn Japanese page
    },
  ];
  
  return (
    <div>
      <Hero/>
      <div className='container mt-5 mb-5'>
        <h2 className='text-center mt-5 ' style={{ color: "black" }}>Welcome to<b> Find @ SKills</b></h2>
        <p className='text-center mb-5 text-dark'>
        A platform to learn and share skills with real-time video calls and expert teachers.
        </p>
        
        <div className="row mt-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Home