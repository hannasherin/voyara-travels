import React from 'react'

const SearchBar = () => {
  return (
<div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-transparent p-3 shadow-none sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:bg-white sm:p-2 sm:shadow-xl">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Where do you want to go?"
        className="w-full min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#1E9FFF] focus:ring-2 focus:ring-[#1E9FFF]/20 sm:rounded-full sm:border-0 sm:px-6 sm:py-3"
      />

      {/* Search Button */}
      <button
        type="button"
        className="w-full shrink-0 rounded-lg bg-[#1E9FFF] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600 sm:w-auto sm:rounded-full"
      >
        Search
      </button>

    </div>
  )
}

export default SearchBar
