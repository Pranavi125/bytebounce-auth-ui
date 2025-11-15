import React from 'react'
import article1 from '../assets/image/article1.jpg'
import article2 from '../assets/image/article2.jpg'
import article3 from '../assets/image/article3.jpg'

const NewsletterCard = () => {

  const Cards = [
    {
      id: 1,
      title: "The Driftless",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet eum inventore explicabo odio deserunt accusantium suscipit aliquam provident numquam culpa quae voluptatibus officia! Optio!",
      image: article1,
      field: "AI"
    },
    {
      id: 2,
      title: "The Driftless",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. illo, amet eum inventore explicabo odio deserunt accusantium suscipit aliquam provident numquam culpa quae voluptatibus officia! Optio!",
      image: article2,
      field: "Finance"
    },
    {
      id: 3,
      title: "The Driftless",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam recusandae earum quia aperiam illum illo, amet eum inventore explicabo odio deserunt accusantium suscipit Optio!",
      image: article3,
      field: "Healthcare"
    }
  ]

  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-20 py-12">

      {/* Heading with proper spacing */}
      <h1 className="text-4xl sm:text-5xl font-bold text-left text-gray-800">
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
              <button className="bg-black/30 px-3 py-1 text-xs mb-1 rounded-2xl border">
                {card.field}
              </button>

              <h1 className="text-3xl font-semibold mb-4 underline">
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
