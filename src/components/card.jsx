export default function Card({ title = "Product", price = 19, onAdd }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="aspect-square w-full rounded-md bg-gray-100" />
      <h3 className="mt-3 font-medium text-gray-900">{title}</h3>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-indigo-600 font-semibold">${price}</span>
        <button
          onClick={onAdd}
          className="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
        >
          Buy
        </button>
      </div>
    </div>
  )
}
