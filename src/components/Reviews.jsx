
const reviews = [
  {
    name: "Aarav",
    role: "UNDERGRAD STUDENT",
    text: "ByteBounce saves me hours every week. Instead of scrolling endlessly for internships, I get a clean list of verified opportunities right in my inbox. Honestly the most useful email I get.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Maya",
    role: "EARLY-CAREER DESIGNER",
    text: "The insights are gold. Not just links, actual tips on how to stand out, when to apply, and how to craft my applications. Helped me land two interviews already!",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Zane",
    role: "COMPUTER SCIENCE STUDENT",
    text: "I love that everything is curated. No spam, no irrelevant roles just high-quality opportunities for students like me. The weekly format keeps me consistent without feeling overwhelmed.",
    image: "https://i.pravatar.cc/100?img=18",
  },
  {
    name: "Ritika",
    role: "MBA CANDIDATE",
    text: "I’ve subscribed to a lot of newsletters, but ByteBounce is the only one I actually open. The career strategies and expert advice have been incredibly helpful during placements.",
    image: "https://i.pravatar.cc/100?img=45",
  },
];


const Reviews = () => {
  return (
    <section className="bg-[#DAF3FF] mx-auto py-12 px-6">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl text-center mb-8"><span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent font-bold mb-10">Reviews </span></h2>
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
