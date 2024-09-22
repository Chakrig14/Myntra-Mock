import { useDispatch, useSelector } from "react-redux";
import { listedFeaturedCollections } from "../redux/Actions/ProductCollectionAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/featureCollection.css";

const FeatureCollection = () => {
    const dispatch = useDispatch();
    const listCollection = useSelector((state) => state.listCollection);
    const { loading, error, collections } = listCollection;
    useEffect(() => {
        dispatch(listedFeaturedCollections());
    }, [dispatch]);
    return (
        <div className="feature-section">
            {loading ? (<div>Loading</div>) : error ? (<div>{error}</div>) : collections.map((item) => (
                <div className="feature-card overlay">
                    <img src={item.image} alt={item.name} />
                    <div className="link-button">
                        <Link><button className="collection-btn">{item.name}</button></Link>
                    </div>
                </div>))}
        </div>
    )
}

export default FeatureCollection