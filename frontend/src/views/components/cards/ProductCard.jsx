import {useCart} from "../../contexts/CartContext.jsx";

export default function ProductCard({ product }) {
    const { addItem } = useCart()

    return (
        <div>
            <a href={`/product/${product.slug}`} className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img
                    src={product.image}
                    loading="lazy"
                    alt={product.product}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="absolute bottom-2 left-0 flex gap-2">
                    <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">{product.discount}</span>
                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
                </div>
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                    <a href={product.slug} className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        {product.product}
                    </a>
                    <span className="text-gray-500">by {product.brand}</span>
                </div>

                <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">Kes {product.retail_price}</span>
                    <span className="text-sm text-red-500 line-through">Kes {product.list_price}</span>
                </div>
            </div>

            <div className="flex gap-2.5 mt-4">
                <a href="#"
                   onClick={() => addItem(product.id)}
                   className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                    Add to cart</a>

                <a href="#"
                   className="inline-block flex-1 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                    Remove from cart</a>
            </div>
        </div>
    )
}
