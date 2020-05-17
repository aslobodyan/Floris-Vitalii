import productAPI from "../../api/product-api";
import mockAPI from "../../api/mock-api";

const SET_PRICE = 'SET_PRICE';
const SET_TITLE = 'SET_TITLE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_OFFERER = 'SET_OFFERER';
const SET_TEMPLATE_DATA = 'SET_TEMPLATE_DATA';

const initialState = {
    price: null,
    title: null,
    description: null,
    isInitialized: false,
    offerer: {
        logo: null,
        name: null,
    },
    templateData: null,
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
        case SET_OFFERER:
            return {
                ...state,
                offerer: {
                    logo: action.data.logo,
                    name: action.data.name,
                }
            }
        case SET_TEMPLATE_DATA:
            return {
                ...state,
                templateData: action.data,
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
export const setOfferer = (data) => ({ type: SET_OFFERER, data });
export const setTemplateData = (data) => ({ type: SET_TEMPLATE_DATA, data });

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

                const { logo, name } = response.data.data[0].offerer;

                if (logo && logo.length) {
                    let logoAdopted = logo.toLowerCase().split('?')[0];

                    dispatch(setOfferer({
                        logo: logoAdopted || null,
                        name,
                    }));
                }

                const { title, description, price } = response.data.data[0].product;

                price && price.low && dispatch(setPrice(price.low));
                title && dispatch(setTitle(title));
                description && dispatch(setDescription(description));
            })
            .catch((error) => {
                console.log(error)
            })
    }
};
export const getTemplateData = () => {
    return dispatch => {
        mockAPI
            .getTemplateData()
            .then((response) =>{
                if (!response || !response.length) {
                    return [];
                }

                dispatch(setTemplateData(response));
            });
    }
};

export default mainReducer;
