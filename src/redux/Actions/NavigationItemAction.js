import axios from "axios";
import { NAVIGATION_ITEM_FAIL, NAVIGATION_ITEM_REQUEST, NAVIGATION_ITEM_SUCCESS } from "../Constants/NavigationItemsConstants";

export const navigationList = () => async (dispatch) => {
    try {
        dispatch({ type: NAVIGATION_ITEM_REQUEST })
        const { data } = await axios.get("/api/navigation");
        dispatch({ type: NAVIGATION_ITEM_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: NAVIGATION_ITEM_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}