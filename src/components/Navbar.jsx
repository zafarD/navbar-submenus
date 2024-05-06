import { FaBars } from "react-icons/fa";
import { useGlobalAppContext } from "../Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const {openSidebar, setPageId} = useGlobalAppContext()
    const handleSubmenu = (e) => {
        if(!e.target.classList.contains("nav-link")) {
            setPageId(null)
        }
    }

    return <nav>
        <div className="nav-center" onMouseOver={handleSubmenu}>
            <h3 className="logo">ZAFAR AHASAN</h3>
            <button className="toggle-btn" onClick={openSidebar}>
                <FaBars />
            </button>
            {/* links */}
            <NavLinks />
        </div>
    </nav>
} 
export default Navbar;