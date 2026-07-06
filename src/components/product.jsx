import Card from "./card";

const items = [
  { title: "Headphones", price: "$59" },
  { title: "Keyboard", price: "$39" },
  { title: "Mouse", price: "$25" },
  { title: "Monitor", price: "$199" },
];

export default function Product() {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Popular products</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <Card key={item.title} title={item.title} price={item.price} />
        ))}
      </div>
    </section>
  )
}
