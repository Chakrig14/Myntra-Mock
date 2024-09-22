import { PRODUCT_VARIANT_CHANGE, PRODUCT_VARIANT_CHANGE_FAIL, PRODUCT_VARIANT_CHANGE_REQUEST } from "../Constants/ProductPriceConstants";

export const productSizeReducer = (state = { productVariantId: {} }, action) => {
    switch (action.type) {
        case PRODUCT_VARIANT_CHANGE_REQUEST:
            return { loading: true, productVariantId: {} }
        case PRODUCT_VARIANT_CHANGE:
            return { loading: false, productVariantId: action.payload };
        case PRODUCT_VARIANT_CHANGE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
} 