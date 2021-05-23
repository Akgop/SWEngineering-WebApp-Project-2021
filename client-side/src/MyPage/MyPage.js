import Footer from "../Footer/Footer"
import CollapseNav from "../Navbar/CollapseNav";
import Navbar from "../Navbar/Navbar"

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