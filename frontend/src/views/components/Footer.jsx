export default function Footer() {
    return (
        <>
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
