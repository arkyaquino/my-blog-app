


import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";





function MainLayout() {
    return(
        <>
         <Header />
            <Outlet context={{name: '', age: 1, Address: 'City'}}/>
         <Footer />
        </>
    )
}
export default MainLayout;