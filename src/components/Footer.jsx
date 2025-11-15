import { Facebook, Twitter, Wifi, MailPlus, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black px-6 sm:px-12 lg:px-20 text-white mt-16  sm:rounded-t-[120px] lg:rounded-t-[180px] py-8 sm:py-10">
      <section className="max-w-6xl mx-auto">
        <div className="hidden lg:flex lg:flex-wrap lg:justify-between gap-6">
          <div className="footer-1 p-2">
            <a className="text-4xl font-bold" href="/">LOGO</a>
            <h1 className="text-sm mt-1 opacity-80">Slogan Company</h1>
          </div>
          <div className="flex flex-col p-2">
            <a className="p-1 hover:text-gray-300" href="/">WEEKLY THEMES</a>
            <a className="p-1 hover:text-gray-300" href="/">PRE-SALE FAQS</a>
            <a className="p-1 hover:text-gray-300" href="/">SUBMIT A TICKET</a>
          </div>
          <div className="flex flex-col p-2">
            <a className="p-1 hover:text-gray-300" href="/">SERVICES</a>
            <a className="p-1 hover:text-gray-300" href="/">THEME TWEAK</a>
          </div>
          <div className="flex flex-col p-2">
            <a className="p-1 hover:text-gray-300" href="/">SHOWCASE</a>
            <a className="p-1 hover:text-gray-300" href="/">WIDGETKIT</a>
            <a className="p-1 hover:text-gray-300" href="/">SUPPORT</a>
          </div>
          <div className="flex flex-col p-2">
            <a className="p-1 hover:text-gray-300" href="/">ABOUT US</a>
            <a className="p-1 hover:text-gray-300" href="/">CONTACT US</a>
            <a className="p-1 hover:text-gray-300" href="/">AFFILIATES</a>
            <a className="p-1 hover:text-gray-300" href="/">RESOURCES</a>
          </div>
        </div>
 
       {/* {mobile View} */}
        <div className="lg:hidden">
          <div className="text-center mb-6">
            <a className="text-3xl font-bold" href="/">LOGO</a>
            <h1 className="text-sm mt-1 opacity-80">Slogan Company</h1>
          </div>
          <div className="flex justify-evenly text-sm">
            <div className="flex flex-col space-y-2">
              <a href="/">Weekly Themes</a>
              <a href="/">Services</a>
              <a  href="/">Showcase</a>
              <a  href="/">About Us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a  href="/">Pre-Sale FAQs</a>
              <a  href="/">Theme Tweak</a>
              <a  href="/">Support</a>
              <a  href="/">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-8 sm:mt-10 border-gray-700" />
      
      <div className="flex gap-3 justify-center items-center py-6 sm:py-8 flex-wrap">
        <Facebook className="fill-white hover:bg-gray-700 h-9 w-9 sm:h-10 sm:w-10 p-2 border border-white/60 rounded-full" />
        <Twitter className="fill-white hover:bg-gray-700 h-9 w-9 sm:h-10 sm:w-10 p-2 border border-white/60 rounded-full" />
        <Wifi className="h-9 w-9 hover:bg-gray-700 sm:h-10 sm:w-10 p-2 border border-white/60 rounded-full" />
        <MailPlus className="h-9 w-9 hover:bg-gray-700 sm:h-10 sm:w-10 p-2 border border-white/60 rounded-full" />
        <Linkedin className="fill-white hover:bg-gray-700 h-9 w-9 sm:h-10 sm:w-10 p-2 border border-white/60 rounded-full" />
      </div>
      
      <h1 className="text-center text-xs sm:text-sm opacity-80 pb-3">
        &copy; Copyright. All rights reserved.
      </h1>
    </footer>
  )
}

export default Footer