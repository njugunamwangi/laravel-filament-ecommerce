export default function BrandCard({ brand }) {
    return (
        <>
            <div>
                <a href={`/brand/${brand.slug}`} className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                    <img
                        src={brand.image}
                        loading="lazy"
                        alt={brand.brand}
                        className="absolute inset-0 aspect-[7/3] object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span className="text-lg font-bold text-gray-800 lg:text-xl">{brand.brand}</span>
                    </div>
                </a>
            </div>
        </>
    )
}
