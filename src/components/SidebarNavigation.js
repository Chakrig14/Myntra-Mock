import navitems from "../data/Navitems";
import "../css/sidebarnavigation.css";
import { KeyboardArrowRight } from "@mui/icons-material";

const SidebarNavigation = ({ sendSideBarStatus }) => {
    return (
        <div className="sidebar-bg" onClick={(e) => { sendSideBarStatus(e) }}>
            <div className="sidebar-nav-mobile">
                <h3>Shop By Department</h3>
                <ul>
                    {navitems.map((item) => (<li className="arrow-content"><p>{item.item}</p><span><KeyboardArrowRight /></span></li>))}
                </ul>
            </div>
        </div>
    )
}

export default SidebarNavigation;