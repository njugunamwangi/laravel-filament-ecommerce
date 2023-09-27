import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios.js";
import Header from "./Header.jsx";
import Loading from "../core/Loading.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function ProductView() {
    const { slug } = useParams()

    const { user, setUser, token, setToken } = useStateContext()

    const [ product, setProduct ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get(`/product/${slug}`)
            .then(({ data }) => {
                setProduct(data.data)
                setLoading(false)
            })
    }, [])

    if(token) {
        useEffect(() => {
            axiosClient.get('/me')
                .then(({data}) => {
                    setUser(data)
                })
        }, [])
    }

    return (
        <>
            <Header />

            {loading && (<Loading />)}

            {!loading && (
                <>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={product.image}
                                            loading="lazy" alt="Photo by Himanshu Dewangan"
                                            className="h-full w-full object-cover object-center"/>

                                        <span
                                            className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">{product.discount}</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {product.photos && product.photos.map(photo => (
                                            <div key={photo} className="overflow-hidden rounded-lg bg-gray-100">
                                                <img
                                                    src={photo}
                                                    loading="lazy" alt="Product Photo"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <div className="md:py-8">
                                    <div className="mb-2 md:mb-3">
                                        <span className="mb-0.5 inline-block text-gray-500">{product.brand}</span>
                                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{product.product}</h2>
                                    </div>

                                    <div className="mb-6 flex items-center md:mb-10">
                                        <div className="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        </div>

                                        <span className="ml-2 text-sm text-gray-500">4.2</span>

                                        <a href="#"
                                           className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view
                                            all 47 reviews</a>
                                    </div>

                                    {product.colors && product.colors.length > 0 && (
                                        <div className="mb-4 md:mb-6">
                                            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Colors</span>

                                            <div className="flex flex-wrap gap-4">
                                                {product.colors.map(color => (
                                                    <button key={color.id} type="button"
                                                            className="flex h-8 w-24 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">{color.color}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {product.sizes && product.sizes.length > 0 && (
                                        <div className="mb-8 md:mb-10">
                                            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Sizes</span>

                                            <div className="flex flex-wrap gap-3">
                                                {product.sizes.map(size => (
                                                    <button key={size.id} type="button"
                                                            className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">{size.size}
                                                    </button>
                                                ))}

                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <div className="flex items-end gap-2">
                                            <span className="text-xl font-bold text-gray-800 md:text-2xl">Kes {product.retail_price}</span>
                                            <span className="mb-0.5 text-red-500 line-through">Kes {product.list_price}</span>
                                        </div>

                                        <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
                                    </div>

                                    <div className="mb-6 flex items-center gap-2 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
                                        </svg>

                                        <span className="text-sm">2-4 day shipping</span>
                                    </div>

                                    <div className="flex gap-2.5">
                                        <a href="#"
                                           className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                                            Add to cart</a>

                                        <a href="#"
                                           className="inline-block flex-1 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                                            Remove from cart</a>

                                        {user && token && (
                                            <a href="#"
                                               className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="mt-10 md:mt-16 lg:mt-20">
                                    <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>

                                    <p className="text-gray-500">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
