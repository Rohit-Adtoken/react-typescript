import React from 'react'


const hero = ({ title=" Start Your Campaign Now  ", subtitle= "Find the React that fits your skill set Launch your campaign and reach a global audience easily.Get started with real-time payments and secure transactions."}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
     
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
          {/* <div className="flex justify-center mt-2">
            <iframe
              src="http://127.0.0.1:5175/index.html?type=leaderboard&apiKey=87b37095dbd68323c513f905ab4f056c74b1d9861d6f8e6bfb49ed92b84d17b2"
              width="745"
              height="115"
              scrolling="no"
              style={{ border: "none", overflow: "hidden" }}
            ></iframe>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default hero