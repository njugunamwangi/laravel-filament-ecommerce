import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import {useParams} from "react-router-dom";
import ProductCard from "./components/cards/ProductCard.jsx";
import Loading from "./core/Loading.jsx";

export default function Category() {
    const { slug } = useParams()

    const [ byCategory, setByCategory ] = useState([])

    const [ category, setCategory ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get(`/category/${slug}`)
            .then(({data}) => {
                setByCategory(data.products)
                setCategory(data.category)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Header />

            {loading && (<Loading />)}
            {
                !loading && (
                    <>
                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div className="mb-6 flex items-end justify-between gap-4">
                                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{category.category}</h2>
                                </div>

                                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                                    {byCategory.map(product => (
                                        <ProductCard product={product} key={product.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
