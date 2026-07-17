import Card from "./card";
import { useProductStore } from "../lib/products";

export default function Product() {
  const products = useProductStore((state) => state.products);
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Popular products</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            onAdd={() => addToCart(item)}
          />
        ))}
      </div>
    </section>
  )
}
