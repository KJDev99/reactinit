export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <div className="text-xl font-bold text-indigo-600">MyShop</div>
      <ul className="hidden md:flex gap-6 text-sm text-gray-600">
        <li className="hover:text-indigo-600 cursor-pointer">Home</li>
        <li className="hover:text-indigo-600 cursor-pointer">Products</li>
        <li className="hover:text-indigo-600 cursor-pointer">About</li>
        <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
      </ul>
      <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
        Sign in
      </button>
    </nav>
  )
}
