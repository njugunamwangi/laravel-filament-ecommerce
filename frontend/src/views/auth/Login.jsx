import {NavLink, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {useRef, useState} from "react";
import axiosClient from "../../axios.js";

export default function Login() {
    const { showToast } = useStateContext({})

    const { setUser, setToken } = useStateContext()

    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (ev) => {
        ev.preventDefault()
        setLoading(true)
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosClient.post('/login', payload)
            .then(({data}) => {
                navigate('/')
                setUser(data.user)
                setToken(data.token)
                setLoading(false)
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    showToast(error.response.data.error, 'error')
                    setLoading(false)
                }
            })
    }

    return (
        <>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <Header />

            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign into your account
                </h2>
                <form onSubmit={onSubmit} className="space-y-6 mt-10" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                ref={emailRef}
                                placeholder="joe@shields.com"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="********"
                                ref={passwordRef}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <NavLink to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign Up
                    </NavLink>
                </p>
            </div>
        </>
    )
}
