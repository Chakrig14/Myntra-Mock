import { LocalMallOutlined, MenuOpen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../css/navigation.css";
import { useEffect, useState } from "react";
import NavMiniModal from "./NavMiniModal";
import SidebarNavigation from "./SidebarNavigation";
import { useDispatch, useSelector } from "react-redux"
import { navigationList } from "../redux/Actions/NavigationItemAction";

const Navigation = () => {
    const [modalValue, setModal] = useState({});
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const dispatch = useDispatch();
    const navigationItem = useSelector((state) => state.navigationItem);
    const { loading, error, navigation } = navigationItem;
    useEffect(() => {
        dispatch(navigationList())
    }, [dispatch])
    function openModal(item) {
        setModal(item);
    }
    function closeModal() {
        setModal(null);
    }
    function sideBarOpen() {
        setSideBarOpen(!isSideBarOpen)
    }
    function handleSideBar(e) {
        if (e.target.className === "sidebar-bg") {
            setSideBarOpen(false);
        }
    }
    function mouseLeave(e) {
        if (e.target.className === "nav-item") {
            setModal(null)
        }
    }
    return (
        <>
            <div className="nav-header">
                <div className="nav-item">
                    <Link to="/"><img className="header-logo" src="https://assets.bounceexchange.com/assets/uploads/clients/4994/creatives/71bce41f8ef8c8c867aeaf11b665d3bb.svg" alt="logo" /></Link>
                    <input type="text" placeholder="Search products" className="product-search" />
                    <LocalMallOutlined />
                </div>
                <div className="main-nav">
                    <ul className="nav-item" onMouseLeave={(e) => mouseLeave(e)}>
                        {loading ? (<div>Loading...</div>) : error ? (<div>Error</div>) : navigation ? navigation.map((item) =>
                        (<li onMouseEnter={() => { openModal(item) }} className={`${modalValue != null && modalValue._id === item._id ? "nav-item-active" : ""}`}>
                            {item.name}</li>)) : ""}
                    </ul>
                </div>
                <div>
                    {modalValue !== null ? <NavMiniModal value={modalValue} onClose={closeModal} /> : ""}
                </div>
            </div>
            <div className="nav-header-mobile">
                <div className="nav-item">
                    <MenuOpen onClick={sideBarOpen} />
                    <Link to="/"><img className="header-logo" src="https://assets.bounceexchange.com/assets/uploads/clients/4994/creatives/71bce41f8ef8c8c867aeaf11b665d3bb.svg" alt="logo" /></Link>
                    <LocalMallOutlined />
                </div>
                <input type="text" placeholder="Search products" />
            </div>
            {isSideBarOpen ? <SidebarNavigation sendSideBarStatus={handleSideBar} /> : ""}
        </>
    )
}

export default Navigation;