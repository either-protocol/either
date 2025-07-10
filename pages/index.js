import PredictionCard from '../components/PredictionCard';
import FeaturedPrediction from '../components/FeaturedPrediction';

const SAMPLE_PREDICTIONS = [
  {
    imageUrl: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
    question: 'Will Bitcoin reach $100k by end of 2024?',
    yesPercentage: 65,
    totalBetAmount: 1420,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Apple release a foldable iPhone in 2024?',
    yesPercentage: 32,
    totalBetAmount: 890,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Ethereum switch to proof of stake in Q2?',
    yesPercentage: 78,
    totalBetAmount: 2340,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Tesla stock hit $300 by July 2024?',
    yesPercentage: 45,
    totalBetAmount: 1150,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will ChatGPT-5 be released in 2024?',
    yesPercentage: 28,
    totalBetAmount: 3200,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will SpaceX achieve successful Starship orbital flight?',
    yesPercentage: 82,
    totalBetAmount: 1780,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Meta launch new VR headset in 2024?',
    yesPercentage: 55,
    totalBetAmount: 920,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will US approve spot Bitcoin ETF by March?',
    yesPercentage: 71,
    totalBetAmount: 4500,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export default function Home() {
  return (
    <>
      <FeaturedPrediction prediction={SAMPLE_PREDICTIONS[0]} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SAMPLE_PREDICTIONS.map((prediction, index) => (
            <PredictionCard
              key={index}
              {...prediction}
            />
          ))}
        </div>
      </div>
    </>
  );
}
