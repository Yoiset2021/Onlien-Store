import { all } from 'redux-saga/effects'

import products from '../productos/saga'

export default function* rootSaga() {
    yield all([
        products()
    ])
}