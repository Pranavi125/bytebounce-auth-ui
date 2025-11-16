import React from "react";

const reviews = [
  {
    name: "Janet",
    role: "STUDENT",
    text: "LifeNotes bring so much inspirations to life. As a high school student, I can still resonate with them and some habits in them save me from wasting much of my time. I genuinely appreciate Ali’s hard work and generosity for sharing LifeNotes💕💕",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Gonçalo",
    role: "IT CONSULTANT",
    text: "Allowed me to keep active on continuous learning, gather productivity tips, and inspired me to implement new routines that improved my job and life.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Eszter",
    role: "TEACHER",
    text: "LifeNotes helps and inspires me a lot. I love your thoughts, and findings on work-life balance. I’m also interested in entrepreneurship, so everything about LifeNotes is useful to me.",
    image: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Rudra",
    role: "STUDENT",
    text: "Ali’s newsletter has significantly impacted my life over the past eight months. His insights have provided me with a broader perspective on various topics, particularly in productivity, studying, and content creation.",
    image: "https://i.pravatar.cc/100?img=15",
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#f5f5dc] mx-auto py-12 px-6">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>

            <div className="flex items-center mt-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Reviews;
