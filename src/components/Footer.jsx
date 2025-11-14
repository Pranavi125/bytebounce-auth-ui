import { Facebook, Twitter, Wifi, MailPlus, Linkedin } from "lucide-react"

const Footer = () => {
  return (
  <footer className="bg-black px-8 sm:px-12 lg:px-20 text-white mt-16 rounded-t-[80px] sm:rounded-t-[120px] lg:rounded-t-[180px] py-10">
  <section className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between gap-6 max-w-6xl mx-auto">

    <div className="footer-1 p-2">
      <a className="lg:text-4xl font-bold" href="/">LOGO</a>
      <h1 className="text-sm mt-1 opacity-80">Slogan Company</h1>
    </div>

    <div className="flex flex-col p-2">
      <a className="p-1" href="/">WEEKLY THEMES</a>
      <a className="p-1" href="/">PRE-SALE FAQS</a>
      <a className="p-1" href="/">SUBMIT A TICKET</a>
    </div>

    <div className="flex flex-col p-2">
      <a className="p-1" href="/">SERVICES</a>
      <a className="p-1" href="/">THEME TWEAK</a>
    </div>

    {/* <div className="flex flex-col p-2">
      <a className="p-1" href="/">SHOWCASE</a>
      <a className="p-1" href="/">WIDGETKIT</a>
      <a className="p-1" href="/">SUPPORT</a>
    </div> */}

    <div className="flex flex-col p-2">
      <a className="p-1" href="/">ABOUT US</a>
      <a className="p-1" href="/">CONTACT US</a>
      <a className="p-1" href="/">AFFILIATES</a>
      <a className="p-1" href="/">RESOURCES</a>
    </div>
  </section>

  <hr className="mt-10 border-gray-700" />
  <div className="flex gap-3 justify-center items-center py-8 flex-wrap">
    <Facebook className="fill-white h-10 w-10 p-2 border border-white/60 rounded-full" />
    <Twitter className="fill-white h-10 w-10 p-2 border border-white/60 rounded-full" />
    <Wifi className="h-10 w-10 p-2 border border-white/60 rounded-full" />
    <MailPlus className="h-10 w-10 p-2 border border-white/60 rounded-full" />
    <Linkedin className="fill-white h-10 w-10 p-2 border border-white/60 rounded-full" />
  </div>

  <h1 className="text-center text-sm opacity-80 pb-3">
    &copy; Copyright. All rights reserved.
  </h1>

</footer>

  )
}

export default Footer
