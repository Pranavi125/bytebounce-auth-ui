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
    <section className='py-10 px-6 flex flex-col items-center justify-center'>
       <h1 className='text-4xl sm:text-5xl font-thin mb-8 relative inline-block'>
            Join over{" "}
            <span className='relative inline bock'>
                <span className='relative font-semibold z-10 text-black'>330,000 </span>
                <img 
                src="/Vector.svg"
                alt=''
                className='absolute -bottom-2 left-0 z-0'/>
                </span>
            friendly readers
       </h1>

       <div className="flex flex-wrap justify-center gap-20 mt-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            <CountUp end={stats.subscribers} duration={2} />+
          </h2>
          <p className="text-gray-500 mt-1">Subscribers</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            <CountUp end={stats.authors} duration={2} />+
          </h2>
          <p className="text-gray-500 mt-1">Authors</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            <CountUp end={stats.articles} duration={2} />+
          </h2>
          <p className="text-gray-500 mt-1">Articles</p>
        </div>
      </div>


    </section>

  )
}

export default JoinUs
