import { FaTimes } from "react-icons/fa";
import { useGlobalAppContext } from "../Context";
import sublinks from "../data";

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalAppContext()
    return <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-container">
            <button className="close-btn" onClick={closeSidebar}>
                <FaTimes />
            </button>
            <div className="sidebar-links">
                {sublinks.map((item) => {
                    const {pageId, page, links} = item
                    return <article key={pageId}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link) => {
                                const {id, label, icon, url} = link
                                return <a key={id} href={url}>
                                    {icon}
                                    {label}
                                </a>    
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>
    </aside>
}
export default Sidebar;