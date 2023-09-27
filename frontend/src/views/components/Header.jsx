import {useStateContext} from "../contexts/ContextProvider.jsx";
import {Fragment, useEffect, useState} from "react";
import axiosClient from "../../axios.js";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useCart} from "../contexts/CartContext.jsx";

export default function Header() {
    const { user, setUser, token, setToken } = useStateContext()

    const { cart } = useCart()

    const [open, setOpen] = useState(false)

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
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="bg-white py-6 sm:py-8 lg:py-12">
                                                    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                                                        <div className="mb-6 sm:mb-10 lg:mb-16">
                                                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your
                                                                Cart</h2>
                                                        </div>

                                                        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
                                                            <div className="py-5 sm:py-8">
                                                                <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                                                                    <div className="sm:-my-2.5">
                                                                        <a href="#"
                                                                           className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                                                                                loading="lazy" alt="Photo by Thái An"
                                                                                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                                                                        </a>
                                                                    </div>

                                                                    <div className="flex flex-1 flex-col justify-between">
                                                                        <div>
                                                                            <a href="#"
                                                                               className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Top</a>

                                                                            <span className="block text-gray-500">Size: S</span>
                                                                            <span className="block text-gray-500">Color: White</span>
                                                                        </div>

                                                                        <div>
                                                                            <span className="mb-1 block font-bold text-gray-800 md:text-lg">$15.00</span>

                                                                            <span className="flex items-center gap-1 text-sm text-gray-500">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none"
                                                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                                                </svg>

                                                                                In stock
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                                                                        <div className="flex flex-col items-start gap-2">
                                                                            <div className="flex h-12 w-24 overflow-hidden rounded border">
                                                                                <input type="number" value="1"
                                                                                       className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"/>

                                                                                <div className="flex flex-col divide-y border-l">
                                                                                    <button
                                                                                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+
                                                                                    </button>
                                                                                    <button
                                                                                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-
                                                                                    </button>
                                                                                </div>
                                                                            </div>

                                                                            <button
                                                                                className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete
                                                                            </button>
                                                                        </div>

                                                                        <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                                                                            <span className="block font-bold text-gray-800 md:text-lg">$15.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-end gap-4">
                                                            <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                                                                <div className="space-y-1">
                                                                    <div className="flex justify-between gap-4 text-gray-500">
                                                                        <span>Subtotal</span>
                                                                        <span>$129.99</span>
                                                                    </div>

                                                                    <div className="flex justify-between gap-4 text-gray-500">
                                                                        <span>Shipping</span>
                                                                        <span>$4.99</span>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-4 border-t pt-4">
                                                                    <div className="flex items-start justify-between gap-4 text-gray-800">
                                                                        <span className="text-lg font-bold">Total</span>

                                                                        <span className="flex flex-col items-end">
                                                                          <span className="text-lg font-bold">$134.98 USD</span>
                                                                          <span className="text-sm text-gray-500">including VAT</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-end gap-4 mt-4">
                                                            <a
                                                                href="/shopping-cart"
                                                                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                                                Shopping Cart
                                                            </a>
                                                            <a
                                                                href="/checkout"
                                                                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check
                                                                out
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="mb-8 border-b">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>

                        Flowrift
                    </a>

                    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Collections</a>
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Sale</a>
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                    </nav>

                    <div className="flex divide-x border-r sm:border-l">
                        {user && token && (
                            <>
                                <a href="/wishlist" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>

                                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
                                </a>

                                <a href="/account" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>

                                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                        Account
                                    </span>
                                </a>
                            </>
                        )}

                        {!token && (
                            <a href="/login" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                    Account
                                </span>
                            </a>
                        )}


                        <a href="#" onClick={() => setOpen(true)} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>

                            <div className="flex gap-2">
                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                    ({cart.length})
                                </span>
                            </div>
                        </a>

                        <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>

                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
