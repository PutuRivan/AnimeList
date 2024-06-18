import React from 'react'

const loading = () => {
  return (
    <>
      <header className="mt-5 flex justify-center">
        <div className="skeleton h-5 w-64 "></div>
      </header>
      <main className="mx-5">
        <div className="mt-5 grid lg:grid-cols-2 border-b border-spacing-10 grid-cols-1 text-color-white">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="skeleton w-64 h-64"></div>
            <div className="skeleton w-64 h-10"></div>
            <div className="skeleton w-64 h-10"></div>
            <div className="skeleton w-64 h-10"></div>
          </div>
          <div className="w-full h-full">
            <div className="skeleton w-full h-full"></div>
          </div>
        </div>
        <div className="mt-3 gap-3 flex flex-col">
          <div className="skeleton h-10 w-32"></div>
          <div className="skeleton w-full h-28 "></div>
        </div>
      </main>
    </>
  )
}

export default loading