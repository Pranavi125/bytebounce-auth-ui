import React from 'react'

const NewsletterCard = () => {

    const Cards = [
      {id: 1,
      title: "The Driftless",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet eum inventore explicabo odio deserunt accusantium suscipit aliquam provident numquam culpa quae voluptatibus officia! Optio!",
      image: "/Dummy.webp",
      field:"AI"
      },
      {id: 2,
      title: "The Driftless",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. illo, amet eum inventore explicabo odio deserunt accusantium suscipit aliquam provident numquam culpa quae voluptatibus officia! Optio!",
      image: "/Dummy.webp",
      field:"Finance"
      },
      {id: 3,
      title: "The Driftless",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam recusandae earum quia aperiam illum illo, amet eum inventore explicabo odio deserunt accusantium suscipit Optio!",
      image: "/Dummy.webp",
      field:"Healthcare"
      },
      
    ]

   return (
    <main className='py-16 p-8'>
    <h1 className='text-5xl font-bold mb-10 text-center'>Newsletters</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
       {Cards.map((card) => (   
            <div 
             key={card.id}
             className='relative rounded-4xl shadow-gray-400 hover:shadow-lg hover:scale-104 transition overflow-hidden'>
                <img 
                 src={card.image}
                 alt={card.title}
                 className='w-full h-[500px] object-cover'
                 />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                 <div className='absolute bottom-0 left-0 text-white p-6'>
                    <button className='bg-black/30 px-3 py-1 text-xs mb-1 rounded-2xl border'>{card.field}</button>
                    <h1 className='text-3xl font-semibold mb-5 '><u>{card.title}</u></h1>
                    <p className='text-sm mb-3 '>{card.description}</p>
                 </div>
            </div>
        ))}
    </div>

    </main>
  )
}

export default NewsletterCard;
