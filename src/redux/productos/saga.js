import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_PRODUCTS_START,
    GET_ALL_PRODUCTS_COMPLETE,
    GET_ALL_PRODUCTS_ERROR,
    ADD_PRODUCT_START,
    ADD_PRODUCT_COMPLETE,
    ADD_PRODUCT_ERROR,
    EDIT_PRODUCT_START,
    EDIT_PRODUCT_ERROR,
    EDIT_PRODUCT_COMPLETE,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_COMPLETE,
    DELETE_PRODUCT_ERROR
} from './type'
import { getAll, add, edit, delet } from './service'

export function* getAllProducts() {
    try {
        const products = yield call(getAll)
        yield put({ type: GET_ALL_PRODUCTS_COMPLETE, products })
    } catch (error) {
        yield put({ type: GET_ALL_PRODUCTS_ERROR, error })
    }
}

export function* addProduct({ payload }) {
    try {
        const product = yield call(add, payload)
        yield put({ type: ADD_PRODUCT_COMPLETE, product })
    } catch (error) {
        yield put({ type: ADD_PRODUCT_ERROR, error })
    }
}

export function* editProduct({ payload }) {
    try {
        const product = yield call(edit, payload)
        yield put({ type: EDIT_PRODUCT_COMPLETE, product })
    } catch (error) {
        yield put({ type: EDIT_PRODUCT_ERROR, error })
    }
}

export function* deleteProduct({ payload }) {
    try {
        yield call(delet, payload)
        //aqui paso el mismo producto que le paso a DELETE_PRODUCT_START, porque la api con delete no devuelve nada
        yield put({ type: DELETE_PRODUCT_COMPLETE, payload })
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, error })
    }
}


export default function* products() {
    yield takeLatest(GET_ALL_PRODUCTS_START, getAllProducts)
    yield takeLatest(ADD_PRODUCT_START, addProduct)
    yield takeLatest(EDIT_PRODUCT_START, editProduct)
    yield takeLatest(DELETE_PRODUCT_START, deleteProduct)
}