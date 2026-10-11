
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDestinations } from '../../slice/destinationSlice'

const DestinationCard = () => {
  const { destinations, isloading, error } = useSelector(
    (state) => state.destinationInfo
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDestinations())
  }, [dispatch])

  if (isloading) {
    return (
      <h2 className="py-10 text-center text-lg font-semibold text-[#1E9FFF]">
        Loading destinations...
      </h2>
    )
  }

  if (error) {
    return (
      <h2 className="py-10 text-center text-red-500">
        {error}
      </h2>
    )
  }

  return (
    <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:gap-8 md:grid-cols-2 md:px-6 lg:gap-10">

      {destinations?.map((destination) => (
        <div
          key={destination.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Destination Image */}
          <div className="h-52 w-full overflow-hidden sm:h-64 lg:h-72">
            <img
              src={`/images/Destination/${destination.image}`}
              alt={destination.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Destination Content */}
          <div className="p-5 sm:p-6">
            <h4 className="mb-3 text-xl font-bold text-gray-800 sm:text-2xl">
              {destination.name}
            </h4>

            <p className="mb-3 text-sm text-gray-500">
              📍 {destination.country}
            </p>

            <p className="mb-5 text-sm leading-6 text-gray-600 sm:text-base">
              {destination.description}
            </p>

            <button
              type="button"
              className="rounded-lg bg-[#1E9FFF] px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              Explore Now →
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default DestinationCard
