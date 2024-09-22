import { PRODUCT_VARIANT_CHANGE, PRODUCT_VARIANT_CHANGE_REQUEST } from "../Constants/ProductPriceConstants";
import axios from "axios";

export const variantChangeAction = (variantId, productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_VARIANT_CHANGE_REQUEST });
        const { data } = await axios.get(`/api/products/${productId}`);
        const variantData = data.variants.filter((item) => item._id === variantId);
        dispatch({
            type: PRODUCT_VARIANT_CHANGE,
            payload: variantData
        })
    }
    catch (error) {

    }
}