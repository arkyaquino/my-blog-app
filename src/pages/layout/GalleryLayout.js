

import GalleryFooter from "../../components/image/GalleryFoot";
import GalleryHeader from "../../components/image/GalleryHead";
import { Outlet } from "react-router-dom";




function GalleryLayout() {
    return(
        <>
        <GalleryHeader />
            <Outlet />
         <GalleryFooter />
        </>
    )
}
export default GalleryLayout;