import productAPI from "../../api/product-api";

const SET_PRICE = 'SET_PRICE';
const SET_TITLE = 'SET_TITLE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    price: null,
    title: null,
    description: null,
    isInitialized: false
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {
                ...state,
                price: String(action.price) || null,
            }
        case SET_TITLE:
            return {
                ...state,
                title: action.title || null,
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.description || null,
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return {
                ...state
            }
    }
};

//  Action Creators
export const setPrice = (price) => ({ type: SET_PRICE, price });
export const setTitle = (title) => ({ type: SET_TITLE, title });
export const setDescription = (description) => ({ type: SET_DESCRIPTION, description });
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

//  Thunk Creators
export const initializeApp = () => {
    return (dispatch) => {
        productAPI
            .getProduct()
            .then((response) => {
                if (!response || !response.data || !response.data.data || !response.data.data[0] || !response.data.data[0].product) {
                    return;
                }

                dispatch(initializedSuccess());

                let { title, description, price } = response.data.data[0].product;

                price && price.low && dispatch(setPrice(price.low));
                title && dispatch(setTitle(title));
                description && dispatch(setDescription(description));
            })
            .catch((error) => {
                console.log(error)
            })
    }
};

export default mainReducer;
