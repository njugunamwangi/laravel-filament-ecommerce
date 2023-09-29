import Header from "./components/Header.jsx";
import ProductCard from "./components/cards/ProductCard.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import Loading from "./core/Loading.jsx";
import Pagination from "./core/Pagination.jsx";

export default function Products() {
    const [ products, setProducts ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [ meta, setMeta ] = useState({})

    const onPageClick = (link) => {
        getProducts(link.url)
    }

    const getProducts = (url) => {
        url = url || "/products"
        setLoading(true)
        axiosClient.get(url)
            .then(({ data }) => {
                setProducts(data.data)
                setMeta(data.meta)
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <Header />

            {loading && (<Loading />)}
            {!loading && (
                <>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="mb-6 flex items-end justify-between gap-4">
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">All Products</h2>
                            </div>

                            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 mb-4">
                                {products.map(product => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                            <Pagination meta={meta} onPageClick={onPageClick} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
