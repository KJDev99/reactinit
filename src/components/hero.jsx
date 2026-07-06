export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Find products you love
      </h1>
      <p className="mt-4 max-w-xl text-gray-600">
        A simple place to browse and shop the things you need, all in one spot.
      </p>
      <div className="mt-6 flex gap-3">
        <button className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
          Shop now
        </button>
        <button className="rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100">
          Learn more
        </button>
      </div>
    </section>
  )
}
