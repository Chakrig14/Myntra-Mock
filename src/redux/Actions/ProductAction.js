import axios from "axios";
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../Constants/ProductConstants";

export const productsList = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST })
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}