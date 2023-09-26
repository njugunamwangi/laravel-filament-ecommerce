import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import Loading from "./core/Loading.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
    const [ products, setProducts ] = useState([])

    const [ categories, setCategories ] = useState([])

    const [ brands, setBrands ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/latest')
            .then(({ data }) => {
                setLoading(false)
                setProducts(data.data)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/categories')
            .then(({ data }) => {
                setLoading(false)
                setCategories(data.data)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/brands')
            .then(({ data }) => {
                setLoading(false)
                setBrands(data.data)
            })
    }, [])

    return (
        <>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <Header />

                <HeroSection />
            </div>

            {loading && (<Loading />)}

            {
                !loading && (
                    <>
                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div className="mb-10 md:mb-16">
                                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Latest Products</h2>

                                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                </div>

                                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

                                    {products.map(product => (
                                        <div key={product.id}>
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
                                    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                                        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Summer Sale<br />Up to 70% off.</h2>

                                        <p className="mb-8 max-w-md text-gray-400">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

                                        <div className="mt-auto">
                                            <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Save now</a>
                                        </div>
                                    </div>

                                    <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                                        <img src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500" loading="lazy" alt="Photo by Dom Hill" className="h-full w-full object-cover object-center" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Top Categories</h2>

                                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                                    {categories.map(category => (
                                        <div key={category.id}>
                                            <a href={`/category/${category.slug}`} className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                                <img
                                                    src={category.image}
                                                    loading="lazy"
                                                    alt={category.category}
                                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">{category.category}</span>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Top Brands</h2>

                                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                                    {brands.map(brand => (
                                        <div key={brand.id}>
                                            <a href={`/brand/${brand.slug}`} className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                                <img
                                                    src={brand.image}
                                                    loading="lazy"
                                                    alt={brand.brand}
                                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">{brand.brand}</span>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
                                    <div className="mb-4 sm:mb-8 lg:mb-0">
                                        <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">Get the latest updates</h2>
                                        <p className="text-center text-gray-500 lg:text-left">Sign up for our newsletter</p>
                                    </div>

                                    <div className="flex flex-col items-center lg:items-end">
                                        <form className="mb-3 flex w-full max-w-md gap-2">
                                            <input placeholder="Email" className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                                            <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                                        </form>

                                        <p className="text-center text-xs text-gray-400 lg:text-right">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</a> and <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </>
                )
            }
        </>
    )
}
