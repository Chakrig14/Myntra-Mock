import { FEATURED_COLLECTION_REQUEST, FEATURED_COLLECTION_SUCCESS, FEATURED_COLLECTION_FAIL } from "../Constants/FeaturedCollection";
import axios from "axios";

export const listedFeaturedCollections = () => async (dispatch) => {
    try {
        dispatch({ type: FEATURED_COLLECTION_REQUEST })
        const { data } = await axios.get("/api/collections");
        dispatch({ type: FEATURED_COLLECTION_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: FEATURED_COLLECTION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}