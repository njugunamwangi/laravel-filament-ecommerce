export default function Home() {
    return (
        <>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <header className="mb-8 border-b">
                    <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            Flowrift
                        </a>

                        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                            <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
                            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Collections</a>
                            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Sale</a>
                            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                        </nav>

                        <div className="flex divide-x border-r sm:border-l">
                            <a href="#" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>

                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
                            </a>

                            <a href="/log-in" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Account</span>
                            </a>

                            <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>

                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                            </a>

                            <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>

                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
                            </button>
                        </div>
                    </div>
                </header>

                <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />style online</h1>

                            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                        </div>

                        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                                <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Men</a>
                            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Women</a>
                            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Teens</a>
                        </div>

                        <div className="flex items-center justify-center gap-4 lg:justify-start">
                            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>
                            <span className="h-px w-12 bg-gray-200"></span>

                            <div className="flex gap-4">
                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Selected</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>

                    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                        <div>
                            <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="absolute bottom-2 left-0 flex gap-2">
                                    <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
                                </div>
                            </a>

                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Fancy Outfit</a>
                                    <span className="text-gray-500">by Fancy Brand</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
                                    <span className="text-sm text-red-500 line-through">$39.99</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Cool Outfit</a>
                                    <span className="text-gray-500">by Cool Brand</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Nice Outfit</a>
                                    <span className="text-gray-500">by Nice Brand</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Vladimir Fedotov" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Lavish Outfit</a>
                                    <span className="text-gray-500">by Lavish Brand</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
                                </div>
                            </div>
                        </div>
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
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections</h2>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by engin akyurt" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Women</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Summer Season</span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Streetwear</span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Women</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
                                </div>
                            </a>
                        </div>
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

            <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                        <div className="col-span-full lg:col-span-2">
                            <div className="mb-4 lg:-mt-2">
                                <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                                    <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                    </svg>

                                    Flowrift
                                </a>
                            </div>

                            <p className="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

                            <div className="flex gap-4">
                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present Flowrift. All rights reserved.</div>
                </footer>
            </div>
        </>
    )
}
