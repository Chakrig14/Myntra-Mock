import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { featuredCollectionReducer } from "./Reducers/ProductCollectionReducer";
import { productDetailsReducer, productReducer } from "./Reducers/ProductReducer";
import { navigationItemReducer } from "./Reducers/NavigationItemReducer";
import { productSizeReducer } from "./Reducers/ProductPriceReducer";

const reducer = combineReducers({
    listCollection: featuredCollectionReducer,
    productList: productReducer,
    productDetail: productDetailsReducer,
    navigationItem: navigationItemReducer,
    variantChange: productSizeReducer
});

// const initialState = {
//     productVariantId: {}
// }

const middleware = [thunk];

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;