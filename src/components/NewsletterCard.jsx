import article1 from "../assets/image/article1.jpg";
import article2 from "../assets/image/article2.jpg";
import article3 from "../assets/image/article3.jpg";
import { useNavigate } from "react-router-dom";

const NewsletterCard = () => {
  const navigate = useNavigate();

  const Cards = [
    {
      id: 1,
      title: "How Small Models Are Quietly Redefining AI",
      description:
        "The AI world loves massive models, but a new trend is emerging: compact, efficient systems outperforming giants in speed, cost, and domain specialization. Here’s why small is the new powerful.",
      image: article1,
      field: "AI",
      date: "Dec 12, 2025",
    },
    {
      id: 2,
      title: "Why Retail Investors Are Suddenly Beating the Market",
      description:
        "From fractional investing to AI-powered advisory tools, everyday investors are gaining an unexpected edge. This shift is reshaping traditional market dynamics—and quietly worrying institutions.",
      image: article2,
      field: "Finance",
      date: "Dec 08, 2025",
    },
    {
      id: 3,
      title: "Rise of Preventive Tech in Healthcare",
      description:
        "Wearables and AI diagnostics are moving healthcare from treatment to prediction. Here’s how proactive analytics is helping clinicians detect diseases months before symptoms appear.",
      image: article3,
      field: "Healthcare",
      date: "Nov 28, 2025",
    },
  ];

  return (
    <main id="newsletter" className="px-6 sm:px-10 lg:px-20 py-16">

       <h2 className="text-5xl text-center mb-8">
          <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent font-bold mb-10">Newsletters 
          </span>
          </h2>


      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {Cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/newsletter/${card.id}`)}
            className="relative cursor-pointer rounded-3xl overflow-hidden 
              shadow-gray-400 hover:shadow-xl 
              transition-transform hover:scale-[1.03]"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[480px] object-cover"
            />

            {/* Date badge */}
            <div className="absolute top-4 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {card.date}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 text-white p-6">
              <span className="inline-block bg-[#00A8C5]/30 px-3 py-1 text-xs rounded-2xl border border-white/20 mb-2">
                {card.field}
              </span>

              <h2 className="text-2xl font-semibold mb-3 leading-snug">
                {card.title}
              </h2>

              <p className="text-sm text-white/90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default NewsletterCard;
