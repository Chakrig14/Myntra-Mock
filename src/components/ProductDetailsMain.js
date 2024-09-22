import { useEffect, useState } from "react";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import "../css/productdetailsmain.css";
import { useDispatch, useSelector } from "react-redux";
import { variantChangeAction } from "../redux/Actions/ProductPriceAction";

const ProductDetailsMain = ({ details }) => {
    const dispatch = useDispatch();
    const [currentImage, setCurrentImage] = useState(0);
    function nextImage() {
        setCurrentImage(currentImage === details.image.length - 1 ? 0 : currentImage + 1);
    }
    function previousImage() {
        setCurrentImage(currentImage === 0 ? details.image.length - 1 : currentImage - 1);
    }
    function setThumbnailImage(val) {
        setCurrentImage(val)
    }
    const variantChange = useSelector((state) => state.variantChange);
    const { productVariantId } = variantChange;

    useEffect(() => {
        if (details.variants) {
            if (details.variants[0]._id) {
                dispatch(variantChangeAction(details.variants[0]._id, details._id))
            }
        }
    }, [details, dispatch]);
    return (
        <section className="product-details-module">
            <div className="product-images-section">
                {details.image ? details.image.map((item, index) => <img src={item.imageUrl} alt="image1" className={`product-image ${currentImage === index ? "active-image" : ""}`} />) : <div>error</div>}
                <div className="product-thumbnail">
                    <span><ArrowBackIosRounded onClick={previousImage} /></span>
                    {details.image ? details.image.map((item, index) => <img src={item.imageUrl} alt="image1" onClick={() => setThumbnailImage(index)} className={`product-thumbnail-image ${currentImage === index ? "active-thumbnail-image" : ""}`} />) : <div>error</div>}
                    <span><ArrowForwardIosRounded onClick={nextImage} /></span>
                </div>
            </div>
            <div className="product-details-section">
                <h2 className="product-details-title">{details.name}</h2>
                {Object.keys(productVariantId).length !== 0 ? (
                    <>
                        <p className="product-details-price">₹ {productVariantId[0].price} <span>MRP Inclusive of all Taxes</span></p>
                        <p className="product-details-size">Size: <span>{`"${productVariantId[0].name}"`}</span></p>
                    </>) : <>Loading...</>}
                <p className="product-details-description">{details.description}</p>
            </div>
        </section>
    )
}

export default ProductDetailsMain;