import { Star } from 'lucide-react'

const Subscribe = () => {
  return (
    <main className="px-6 py-16 flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto">
      <section className="w-full lg:w-1/2">
        <div className="flex items-end gap-2 mb-6 flex-wrap">
         <span className="flex items-end gap-2">
          <span className="text-4xl sm:text-5xl font-thin">Subscribe to</span>
         <img 
          src="/plane.svg" 
          className="h-10 sm:h-12 md:h-14 w-auto mb-1" 
          />
         </span>

        <span className="block text-5xl sm:text-6xl font-black leading-tight">
         LifeNotes
        </span>
        </div>
        <p className="text-base sm:text-lg my-6">
          Join a growing community of more than{" "}
          <span className="font-bold">330,000 friendly readers</span>.
        </p>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 h-5 w-5" />
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-1">200+ reviews</p>
      </section>

      <section className="w-full py-3 lg:w-1/2">
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Each week, we share actionable productivity tips, practical life 
          advice, and highlights from our favourite books, directly to your inbox. 
          It’s free and always will be.
        </p>
        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-2 w-full max-w-md">
          <input 
            type="text" 
            placeholder="Your email address"
            className="w-full bg-transparent outline-none text-sm sm:text-base px-3"
          />
          <button className="bg-blue-200 hover:bg-blue-100 py-2 px-5 rounded-full whitespace-nowrap text-sm sm:text-base">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mt-8 max-w-md">
          No spam. Unsubscribe anytime. By signing up, you agree to receive our newsletter.
        </p>
      </section>

    </main>
  )
}

export default Subscribe
