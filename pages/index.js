import PredictionCard from '../components/PredictionCard';
import FeaturedPrediction from '../components/FeaturedPrediction';

const SAMPLE_PREDICTIONS = [
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Top US iPhone app tomorrow?',
    teamA: 'ChatGPT',
    teamB: 'Grok',
    teamAShares: 68,
    teamBShares: 32,
    teamAPercentage: 68,
    teamBPercentage: 32,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Bitcoin reach $100k by end of 2024?',
    yesPercentage: 65,
    noPercentage: 35,
    totalBetAmount: 1420,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Highest temperature in Miami today?',
    teamA: '30°C',
    teamB: '32°C',
    teamAShares: 12,
    teamBShares: 8,
    teamAPercentage: 60,
    teamBPercentage: 40,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Browns win today?',
    teamA: 'Yes',
    teamB: 'No',
    teamAShares: 1,
    teamBShares: 10,
    teamAPercentage: 9,
    teamBPercentage: 91,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Apple release a foldable iPhone in 2024?',
    yesPercentage: 32,
    noPercentage: 68,
    totalBetAmount: 890,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Ethereum switch to proof of stake in Q2?',
    yesPercentage: 78,
    noPercentage: 22,
    totalBetAmount: 2340,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Tesla stock hit $300 by July 2024?',
    yesPercentage: 45,
    noPercentage: 55,
    totalBetAmount: 1150,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will ChatGPT-5 be released in 2024?',
    yesPercentage: 28,
    noPercentage: 72,
    totalBetAmount: 3200,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will SpaceX achieve successful Starship orbital flight?',
    yesPercentage: 82,
    noPercentage: 18,
    totalBetAmount: 1780,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will Meta launch new VR headset in 2024?',
    yesPercentage: 55,
    noPercentage: 45,
    totalBetAmount: 920,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    imageUrl: '/aptos-apt-logo.png',
    question: 'Will US approve spot Bitcoin ETF by March?',
    yesPercentage: 71,
    noPercentage: 29,
    totalBetAmount: 4500,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export default function Home() {
  const handlePredictionConfirm = (prediction) => {
    console.log('Prediction confirmed:', prediction);
  };

  return (
    <>
      <FeaturedPrediction prediction={SAMPLE_PREDICTIONS[0]} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SAMPLE_PREDICTIONS.map((prediction, index) => (
            <PredictionCard
              key={index}
              {...prediction}
              onConfirm={handlePredictionConfirm}
            />
          ))}
        </div>
      </div>
    </>
  );
}
