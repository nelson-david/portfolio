import Footer from "../components/nav/Footer";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/nav/Sidebar";

const Page = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="App" id="butter">
                {children}
                <Footer />
                <div className="padBottom"></div>
            </div>
        </>
    )
}

export default Page;