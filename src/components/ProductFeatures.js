import { Add, Remove } from "@mui/icons-material";
import "../css/productfeatures.css";
import { useState } from "react";

const ProductFeatures = ({ features }) => {
    const [descriptionStatus, setDescriptionStatus] = useState("");
    function showDescription(id) {
        if (id === descriptionStatus) {
            setDescriptionStatus("");
        }
        else {
            setDescriptionStatus(id);
        }
    }
    return (
        <div className="product-feature-section">
            <h2>Product Features</h2>
            <div>
                {features.details ? features.details.map((item) => (
                    <div>
                        <hr />
                        <div className={`product-feature ${descriptionStatus === item._id ? "active" : ""}`} onClick={() => showDescription(item._id)}>
                            <p>{item.title}</p>
                            {descriptionStatus === item._id ? <Remove /> : <Add />}
                        </div>
                        <ul className={descriptionStatus === item._id ? "product-feature-description show" : "product-feature-description hide"}>
                            {item.description.map((feature) => (
                                <li>{feature.descTitle}: <span>{feature.descriptionDetail}</span></li>
                            ))}
                        </ul>
                    </div>
                )) : ""}
            </div>
        </div>
    )
}

export default ProductFeatures;