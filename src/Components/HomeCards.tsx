import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Influencer Marketing</h2>
            <p className="mt-2 mb-4">
            Influencer Marketing Hub offers you all the latest Marketing news, tools and resources to enable influencers, agencies and platforms to connect and harness the power of Marketing.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Create
            </Link>
            </Card>
          <Card bg= 'bg-indigo-100'>
            <h2 className="text-2xl font-bold">Harness the Power of Decentralized Advertising</h2>
            <p className="mt-2 mb-4">
            Become an affiliate and earn instantly by sharing ads, or create impactful campaigns that reach a global audience.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards