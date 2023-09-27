import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axiosClient from "../../axios.js";

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const initialState = { cart: [] }

function reducer(state, {type, payload}) {
    switch (type) {
        case 'ADD':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    payload
                ]
            }
        case 'REMOVE':
            const indexInCart = payload
            const newCart = [...state.cart]
            newCart.splice(indexInCart, 1)
            return {
                ...state, cart: newCart
            }
        case 'EMPTY':

        default:
            return state
    }
}

export function CartProvider({ children }) {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axiosClient.get('/products')
            .then(({data}) => {
                setProducts(data.data)
            })
    }, [])
    const addItem = (id) => {
        const productToAdd = products.find((p) => p.id === id)
        dispatch({type: 'ADD', payload: productToAdd})
    }
    const removeItem = (id) => {
        const productToRemove = state.cart.findIndex((p) => p.id === id)
        dispatch({type: 'REMOVE', payload: productToRemove})
    }

    function countItemsInCart(id) {
        const itemsInCart = state.cart.filter((product) => product.id === id) ?? [];

        return itemsInCart.length
    }

    function totalPrice() {}

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            cart: state.cart,
            countItemsInCart,
            totalPrice: totalPrice(),
        }}>
            {children}
        </CartContext.Provider>
    )
}
