export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-lg font-bold text-indigo-600">MyShop</div>
        <ul className="flex gap-6 text-sm text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Products</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
        <p className="text-sm text-gray-400">© 2026 MyShop</p>
      </div>
    </footer>
  )
}
