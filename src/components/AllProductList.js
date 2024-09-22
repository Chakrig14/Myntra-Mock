import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsList } from "../redux/Actions/ProductAction";
import "../css/allproductlist.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const AllProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(productsList());
    }, [dispatch]
    )
    return (
        <div className="collection">
            <h3>Products</h3>
            <div className="collection-list">
                {loading ? (<Loading />) : error ? error : products.map((prod) => <Link className="prod-link" to={`/products/${prod._id}`}><div className="product-details">
                    <img src={prod.image[0].imageUrl} alt={prod.image[0].imageDescription} className="product-img" />
                    <h3>{prod.name}</h3>
                    <p className="price">₹ {prod.variants[0].price}</p>
                    <p className="variant-text">Available Size: {prod.variants.map((variant) => <span className="product-collection-variant">{variant.name}</span>)}</p>
                </div></Link>)}
            </div>
        </div>
    )
}

export default AllProductList;