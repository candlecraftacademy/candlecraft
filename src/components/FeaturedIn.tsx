import React from 'react';
import { Play } from 'lucide-react';

const FeaturedIn = () => {
  const videos = [
    {
      id: 1,
      title: "Finally Received My Forex Payout in a Nepal Bank | Forex Trading in Nepal",
      thumbnail: "https://img.youtube.com/vi/QjGKd_RudTM/maxresdefault.jpg",
      views: "7K",
      duration: "7:53",
      link: "https://www.youtube.com/watch?v=QjGKd_RudTM&ab_channel=ManishFxTheTrader"
    },
    {
      id: 2,
      title: "$6K Payout Proof | How to Withdraw from a Prop Firm in Nepal",
      thumbnail: "https://img.youtube.com/vi/vVIEM0kr4i0/maxresdefault.jpg",
      views: "9.2K",
      duration: "13:00",
      link: "https://www.youtube.com/watch?v=vVIEM0kr4i0&ab_channel=ManishFxTheTrader"
    },
    {
      id: 3,
      title: "Moving to Dubai? Here’s Everything You Need to Know (Visa, Setup, Trading)",
      thumbnail: "https://img.youtube.com/vi/mXoG7xie6SU/maxresdefault.jpg",
      views: "5K",
      duration: "18:20",
      link: "https://www.youtube.com/watch?v=mXoG7xie6SU&t=9s&ab_channel=ManishFxTheTrader"
    }
  ];

  return (
    <section className="py-12 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold mb-8 text-primary">WATCH OUR VIDEOS</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-gray-400 text-sm">{video.views} views</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@Manishfxthetrader" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Visit Our Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
