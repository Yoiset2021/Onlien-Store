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

const initialState = {
    data: [],
    isLoading: false,
    error: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case GET_ALL_PRODUCTS_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case GET_ALL_PRODUCTS_COMPLETE:
            {
                return {
                    ...state,
                    data: action.products,
                    isLoading: false,
                    error: null
                }
            }
        /* ADD PRODUCTS */
        case ADD_PRODUCT_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case ADD_PRODUCT_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case ADD_PRODUCT_COMPLETE:
            {
                return {
                    ...state,
                    data: [...state.data, action.product],
                    isLoading: false,
                    error: null
                }
            }
        /* EDIT PRODUCTS */
        case EDIT_PRODUCT_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case EDIT_PRODUCT_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case EDIT_PRODUCT_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.map(prod => prod.id === action.product.id ? prod = action.product : prod),
                    isLoading: false,
                    error: null
                }
            }
        /* DELET PRODUCTS */
        case DELETE_PRODUCT_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case DELETE_PRODUCT_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case DELETE_PRODUCT_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.filter(prod => prod.id !== action.payload.id),
                    isLoading: false,
                    error: null
                }
            }
        default:
            return state
    }
}