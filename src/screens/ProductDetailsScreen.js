import ProductDetailsMain from "../components/ProductDetailsMain";
import ProductFeatures from "../components/ProductFeatures";
import ProductPriceDetails from "../components/ProductPriceDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { productDetails } from "../redux/Actions/ProductAction";
import { useEffect } from "react";
import Loading from "../components/Loading";
// import { variantChangeAction } from "../redux/Actions/ProductPriceAction";

const ProductDetailsScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetail;
    useEffect(() => {
        dispatch(productDetails(id));
    }, [dispatch, id]);
    return (
        <>
            {loading ? (<Loading />) : error ? (<>{error}</>) :
                (
                    <>
                        <ProductDetailsMain details={product} />
                        <ProductFeatures features={product} />
                        <ProductPriceDetails priceDetails={product} />
                    </>)}
        </>
    )
}

export default ProductDetailsScreen;