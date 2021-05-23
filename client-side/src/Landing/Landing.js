import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>
            Landing Page 구현하기.
            바로 로그인 페이지로 Redirect 하기 
            로그인 되어있으면 바로 Home으로 Redirect 하기
            <Footer></Footer>
        </div>
    )
}

export default Landing;