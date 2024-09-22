import "../css/navminimodal.css";

const NavMiniModal = ({ value, onClose }) => {
    if (Object.keys(value) === 0) { return };
    const navItem = value;
    return (
        <>
            <h3>{navItem.name}</h3>
            <div className="mini-modal" onMouseLeave={onClose}>
                {navItem.navigationDetails ? navItem.navigationDetails.map((item) => (
                    <div>
                        <img src={item.navIcon} alt={item.navCategory} className="nav-icon" />
                        <p>{item.navTitle}</p></div>)) : ""}
            </div>
        </>
    )
}

export default NavMiniModal;