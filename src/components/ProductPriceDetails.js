import { Add, Remove } from "@mui/icons-material";
import "../css/productpricedetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { variantChangeAction } from "../redux/Actions/ProductPriceAction";
import Loading from "./Loading";

const ProductPriceDetails = ({ priceDetails }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantityValue, setQuantity] = useState(1);
    const variantChange = useSelector((state) => state.variantChange);
    const { error, productVariantId } = variantChange;
    // const { price, _id, inStockCount } = Object.keys(productVariantId) !== 0 && productVariantId[0];
    // const [sizeValue, setSize] = useState(priceDetails.variants && priceDetails.variants[0]._id);
    // const value = priceDetails.variants && priceDetails.variants.filter((item) => item._id === _id);
    // const stockCheck = value && value[0].inStockCount;

    function increaseQuantity() {
        if (quantityValue < productVariantId[0].inStockCount && quantityValue < 10) {
            setQuantity(quantityValue + 1);
        }
        else {
            alert("You can order only 10 per order")
        }
    }
    function decreaseQunatity() {
        if (quantityValue > 1) {
            setQuantity(quantityValue - 1);
        }
        else {
            alert("Quantity can't be less than " + quantityValue);
        }
    }
    function inputQuantity(e) {
        setQuantity(e.target.value);
    }
    function changeVariant(variantId, productId) {
        navigate(`?variant=${variantId}`);
        // setSize(variantId);
        dispatch(variantChangeAction(variantId, productId));
    }

    return (
        <>
            {!priceDetails ? <Loading /> : error ? <>{error}</> : (
                <section className="fixed-price-bar">
                    <div>
                        <p className="price-bar-heading">{priceDetails.name}</p>
                        {/* <p className="fixed-bar-price">₹ {Object.keys(productVariantId) !== 0 ? productVariantId.variants[0].price : <>Loading...</>} <span>MRP Inclusive of all Taxes</span></p> */}
                        {Object.keys(productVariantId).length !== 0 ? <p className="fixed-bar-price">₹ {productVariantId[0].price} <span>MRP Inclusive of all Taxes</span></p> : <>Loading</>}
                    </div>
                    <div>
                        <p className="price-bar-heading">Size</p>
                        {Object.keys(productVariantId).length !== 0 ? priceDetails.variants ? priceDetails.variants.map((size) => (<button className={`size-btn ${productVariantId[0]._id === size._id && "size-btn-active"}`} onClick={() => changeVariant(size._id, priceDetails._id)} >{size.name}</button>)) : "" : <>Loading</>}
                    </div>
                    <div className="qunatity-cart-btn">
                        <div>
                            <p className="price-bar-heading">Quantity</p>
                            <div className="product-quantity-tab">
                                <Remove className="icon-size" onClick={() => decreaseQunatity()} />
                                <input type="text" alt="Quantity" value={quantityValue} onChange={(e) => inputQuantity(e)} className="quantity-box" />
                                <Add className="icon-size" onClick={() => increaseQuantity()} />
                            </div>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </section>

            )}
        </>

    )
}

export default ProductPriceDetails;