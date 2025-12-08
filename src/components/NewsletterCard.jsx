import article1 from '../assets/image/article1.jpg'
import article2 from '../assets/image/article2.jpg'
import article3 from '../assets/image/article3.jpg'

const NewsletterCard = () => {

  const Cards = [
    {
      id: 1,
      title: "How Small Models Are Quietly Redefining AI",
      description:"The AI world loves massive models, but a new trend is emerging: compact, efficient systems outperforming giants in speed, cost, and domain specialization. Here’s why small is the new powerful.",
      image: article1,
      field: "AI"
    },
    {
      id: 2,
      title: "Why Retail Investors Are Suddenly Beating the Market",
      description:
        "From fractional investing to AI-powered advisory tools, everyday investors are gaining an unexpected edge. This shift is reshaping traditional market dynamics—and quietly worrying institutions.",
      image: article2,
      field: "Finance"
    },
    {
      id: 3,
      title:  "Rise of Preventive Tech in Healthcare",
      description:
      "Wearables and AI diagnostics are moving healthcare from treatment to prediction. Here’s how proactive analytics is helping clinicians detect diseases months before symptoms appear.",
      image: article3,
      field: "Healthcare"
    }
  ]

  return (
    <main className="px-6 sm:px-10 lg:px-20 py-12">
      {/* Heading with proper spacing */}
      <h1 className="text-3xl sm:text-4xl font-bold text-left text-gray-800">
        Newsletters
      </h1>

      {/* Space between heading and cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {Cards.map((card) => (
          <div
            key={card.id}
            className="relative rounded-4xl shadow-gray-400 hover:shadow-lg hover:scale-[1.03] transition-transform overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[480px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 text-white p-6">
              <button className="bg-[#00A8C5]lack/30 px-3 py-1 text-xs mb-1 rounded-2xl border">
                {card.field}
              </button>

              <h1 className="text-2xl font-semibold mb-4 underline">
                {card.title}
              </h1>

              <p className="text-sm mb-3">
                {card.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </main>
  )
}

export default NewsletterCard;
