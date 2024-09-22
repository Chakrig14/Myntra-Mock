import { NAVIGATION_ITEM_FAIL, NAVIGATION_ITEM_REQUEST, NAVIGATION_ITEM_SUCCESS } from "../Constants/NavigationItemsConstants";

export const navigationItemReducer = (state = { navigations: [] }, action) => {
    switch (action.type) {
        case NAVIGATION_ITEM_REQUEST:
            return { loading: true, navigation: [] }
        case NAVIGATION_ITEM_SUCCESS:
            return { loading: false, navigation: action.payload }
        case NAVIGATION_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}