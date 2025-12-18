import { useParams, useNavigate } from "react-router-dom";
import article1 from "../assets/image/article1.jpg";
import article2 from "../assets/image/article2.jpg";
import article3 from "../assets/image/article3.jpg";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

const articles = {
  1: {
    title: "How Small Models Are Quietly Redefining AI",
    image: article1,
    date: "Dec 12, 2025",
    readTime: "5 min read",
    content: `
For years, the artificial intelligence industry has been obsessed with scale.
Bigger models, larger datasets, and more compute were seen as the only path
toward better performance. However, a quiet shift is now underway.

Small AI models are proving that intelligence does not always need massive
parameters. These compact systems are faster, cheaper to deploy, and far
more efficient in real-world applications.

Another key advantage is accessibility. Smaller models allow startups and
researchers to innovate without relying on enormous infrastructure.

As AI adoption grows, the future may not belong to the biggest models—but
to the smartest ones.
    `,
  },

  2: {
    title: "Why Retail Investors Are Suddenly Beating the Market",
    image: article2,
    date: "Dec 08, 2025",
    readTime: "4 min read",
    content: `
Retail investors were once considered at a disadvantage compared to
institutional players. Limited capital and delayed information held them back.

With fractional investing and AI-powered tools, individuals now access
previously exclusive financial insights.

This quiet shift is reshaping market dynamics and challenging institutions.
    `,
  },

  3: {
    title: "Rise of Preventive Tech in Healthcare",
    image: article3,
    date: "Dec 28, 2025",
    readTime: "6 min read",
    content: `
Healthcare is shifting from reactive treatment to proactive prevention.
Wearables and AI diagnostics enable early disease detection.

Predictive analytics is improving patient outcomes while lowering costs.

Prevention is becoming the new foundation of modern healthcare.
    `,
  },
};

const NewsletterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles[id];

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return <p className="p-10">Article not found.</p>;

  return (
    <main className="px-6 sm:px-10 lg:px-32 pt-20 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-white bg-black p-1 hover:bg-transparent rounded-full hover:text-gray-800 mb-6 flex items-center gap-1"
        >
          <ChevronLeft className="text-white hover:text-black p-.5" size={20} />
        </button>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight 
          bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {article.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-500 mb-8">
          {article.readTime} · {article.date}
        </p>

        {/* Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[420px] object-cover rounded-xl mb-10 shadow-md"
        />

        {/* Content */}
        <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line space-y-6">
          {article.content}
        </div>
      </div>
    </main>
  );
};

export default NewsletterDetail;
