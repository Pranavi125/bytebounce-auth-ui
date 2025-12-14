import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

const JoinUs = () => {
   const RandomNumber = (min , max) => 
    Math.floor(Math.random()*(max-min + 1)) + min;

   const [stats, setstats] = useState({
    subscribers:0,
    authors:0,
    articles:0,
   });

   useEffect(() => {
    setstats({
        subscribers: RandomNumber(50,100),
        authors: RandomNumber(4,10),
        articles: RandomNumber(1000,1800)
    });
   },[]);
   
  return (
    <section className='py-20 px-8 flex flex-col items-center justify-center'>
       <h1 className='text-4xl font-medium text-[#0F273D] mb-4'>
             Join a growing {" "}
            <span className='relative inline block'>
                <span className='bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent'>Community </span>
                <img 
                src="/Vector.svg"
                alt=''
                className='absolute -bottom-2 left-0 z-0'/>
                </span>
            of curious students
       </h1>

       <div className="flex justify-center gap-6 md:gap-20 mt-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            <CountUp end={stats.subscribers} duration={2} />+
            
          </h2>
          <p className="text-gray-500 mt-1">Subscribers</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            <CountUp end={stats.authors} duration={2} />+
            
          </h2>
          <p className="text-gray-500 mt-1">Authors</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            <CountUp end={stats.articles} duration={2} />+
            
          </h2>
          <p className="text-gray-500 mt-1">Articles</p>
        </div>
      </div>


    </section>

  )
}

export default JoinUs
