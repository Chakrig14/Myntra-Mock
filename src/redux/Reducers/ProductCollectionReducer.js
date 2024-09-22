import { FEATURED_COLLECTION_REQUEST, FEATURED_COLLECTION_SUCCESS, FEATURED_COLLECTION_FAIL } from "../Constants/FeaturedCollection";

export const featuredCollectionReducer = (state = { collections: [] }, action) => {
    switch (action.type) {
        case FEATURED_COLLECTION_REQUEST:
            return { loading: true, collections: [] };
        case FEATURED_COLLECTION_SUCCESS:
            return { loading: false, collections: action.payload };
        case FEATURED_COLLECTION_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}