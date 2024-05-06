import { useGlobalAppContext } from "./Context";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenus from "./components/Submenus";

const App = () => {
  const { isSidebarOpen } = useGlobalAppContext()

  return <main>
    <Navbar />
    <Hero />
    <Sidebar />
    <Submenus />
  </main>
};
export default App;
