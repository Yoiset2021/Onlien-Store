import {
    GET_ALL_PRODUCTS_START,
    GET_ALL_PRODUCTS_COMPLETE,
    GET_ALL_PRODUCTS_ERROR,
    ADD_PRODUCT_START,
    ADD_PRODUCT_COMPLETE,
    ADD_PRODUCT_ERROR,
    EDIT_PRODUCT_START,
    EDIT_PRODUCT_COMPLETE,
    EDIT_PRODUCT_ERROR,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_COMPLETE,
    DELETE_PRODUCT_ERROR
} from './type'


export const getAllProducts = payload => ({
    type: GET_ALL_PRODUCTS_START,
    payload
})

export const getAllProductsSucces = products => ({
    type: GET_ALL_PRODUCTS_COMPLETE,
    products
})

export const getAllProductsError = error => ({
    type: GET_ALL_PRODUCTS_ERROR,
    error
})

export const addProduct = payload => ({
    type: ADD_PRODUCT_START,
    payload
})

export const addProductSucces = product => ({
    type: ADD_PRODUCT_COMPLETE,
    product
})

export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR,
    error
})


export const editProduct = payload => ({
    type: EDIT_PRODUCT_START,
    payload
})

export const editProductSucces = product => ({
    type: EDIT_PRODUCT_COMPLETE,
    product
})

export const editProductError = error => ({
    type: EDIT_PRODUCT_ERROR,
    error
})

export const deleteProduct = payload => ({
    type: DELETE_PRODUCT_START,
    payload
})

export const deleteProductSucces = payload => ({
    type: DELETE_PRODUCT_COMPLETE,
    payload
})

export const deleteProductError = error => ({
    type: DELETE_PRODUCT_ERROR,
    error
})