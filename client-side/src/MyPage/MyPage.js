import Footer from "../Components/Footer"
import CollapseNav from "../Components/CollapseNav";
import Navbar from "../Components/Navbar"

const MyPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CollapseNav></CollapseNav>
            마이페이지 공간.
            <Footer></Footer>
        </div>
    )
}

export default MyPage;