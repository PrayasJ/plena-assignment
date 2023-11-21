export const LOADING_STATUS = Object.freeze({
    NOT_LOADED: 0,
    LOADING: 1,
    LOADED: 2
})

export const API = Object.freeze({
    ALL_DATA: 'https://dummyjson.com/products',
    SPECIFIC_DATA: (id) => `https://dummyjson.com/products/${id}`
})

export const SCREENS = Object.freeze({
    HOME: 0,
    PRODUCT: 1,
    CART: 2,
})

export const DELIVERY_CHARGE = 2