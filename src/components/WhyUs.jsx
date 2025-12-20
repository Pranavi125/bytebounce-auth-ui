import { BarChart, Star, TrendingUp, Gift } from "lucide-react";

const WhyUs = () => {
  return (
    <main className='bg-[#00A8C5] min-h-screen mx-auto p-4 md:p-16'>
      <div className='flex flex-col max-w-5xl justify-center gap-4 md:gap-0 items-center min-h-screen mx-auto'>
        
        <h1 className='text-white text-3xl md:text-4xl font-bold mb-8 md:mb-12 underline'>
          Why ByteBounce?
        </h1>
        
        {/* top section */}
        <section className='md:mb-10 flex gap-6 md:gap-10 w-full mb-0'>
          {/* LEFT WHITE BOX */}
          <div className='bg-white hover:scale-102 w-full h-1/3 md:w-3/5 rounded-t-[60px] p-6 md:p-10'>
            <h2 className='font-bold text-lg md:text-xl mb-4'>More than a newsletter — your career catalyst</h2>
            <p className='text-sm md:text-[#00A8C5]ase leading-relaxed text-gray-700'>
              ByteBounce helps students discover verified, high-quality career opportunities 
              curated by experts who understand your goals. 
            </p>

          </div>

          {/* RIGHT BLUE TEXT LIST */}
          <div className='hidden md:flex text-xl flex-col justify-center gap-6 w-2/5 p-4'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className='w-6 h-6 text-white fill-white'>
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'/>
                  <path fillRule='evenodd' d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z' clipRule='evenodd'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Curated Just For You</span>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className='w-6 h-6 text-white fill-white'>
                  <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Save Hours Weekly</span>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className='w-6 h-6 text-white fill-white'>
                  <path d='M4 3a2 2 0 100 4h12a2 2 0 100-4H4z'/>
                  <path fillRule='evenodd' d='M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z' clipRule='evenodd'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Actionable Insights</span>
            </div>
          </div>
        </section>
        
        {/* bottom section */}
        <section className='md:mt-10 flex gap-6 md:gap-10 w-full'>
          
          {/* LEFT BLUE TEXT LIST */}
          <div className='hidden md:flex text-xl flex-col justify-center gap-6 w-2/5 p-4'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className='w-6 h-6 text-white fill-white'>
                  <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Join Elite Community</span>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className=' w-6 h-6 text-white fill-white'>
                  <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Always Free</span>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-[#00A8C5]lue-900 p-3 rounded-lg'>
                <svg className='w-6 h-6 text-white fill-white'>
                  <path fillRule='evenodd' d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z' clipRule='evenodd'/>
                </svg>
              </div>
              <span className='text-white font-medium'>Zero Spam Promise</span>
            </div>
          </div>

          {/* RIGHT WHITE FEATURE BOX */}
          <div className='bg-white hover:scale-102 w-full md:w-3/5 rounded-b-[60px] p-6 md:p-10'>
            <div className='space-y-5'>
              
              <div className='flex gap-3'>
                <BarChart className="h-8 w-8 p-1 bg-[#00A8C5]lue-300 rounded"/>
                <div>
                  <p className='font-semibold text-sm md:text-[#00A8C5]ase mb-1'>Hand-Picked Opportunities</p>
                  <p className='text-xs md:text-sm text-gray-600'>Every listing is verified by experts so you only see what truly matters.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                 <Star className="h-8 w-8 p-2 fill-black bg-rose-300 rounded"/>
                <div>
                  <p className='font-semibold text-sm md:text-[#00A8C5]ase mb-1'>Save Hours of Searching</p>
                  <p className='text-xs md:text-sm text-gray-600'>We scan hundreds of platforms so you don’t have to.</p>
                </div>
              </div>
              
              <div className='flex gap-3'>
                <Gift className="h-8 w-8 p-2 bg-green-300 rounded"/>
                <div>
                  <p className='font-semibold text-sm md:text-[#00A8C5]ase mb-1'>Free. Always.</p>
                  <p className='text-xs md:text-sm text-gray-600'>No paywalls, no upgrades. Just value every week.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <TrendingUp className="h-8 w-8 p-1 bg-purple-300 rounded"/>
                <div>
                  <p className='font-semibold text-sm md:text-[#00A8C5]ase mb-1'>Insights That Matter</p>
                  <p className='text-xs md:text-sm text-gray-600'>Application strategies, insider tips, and expert guidance included.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default WhyUs;
